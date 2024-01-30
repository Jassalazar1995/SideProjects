package main

import(
	"bufio"
	"fmt"
	"net"
	"strings"
	"sync"
)

// KeyValueStore holds the key-value data.
type KeyValueStore struct {
	store map[string]string
	lock  sync.RWMutex
}

// NewKeyValueStore initializes a new key-value store.
func NewKeyValueStore() *KeyValueStore {
	return &KeyValueStore{
		store: make(map[string]string),
	}
}

// Set a value for a key in the store.
func (kvs *KeyValueStore) Set(key, value string) {
	kvs.lock.Lock()
	defer kvs.lock.Unlock()
	kvs.store[key] = value
}

// Get a value by key from the store.
func (kvs *KeyValueStore) Get(key string) (string, bool) {
	kvs.lock.RLock()
	defer kvs.lock.RUnlock()
	val, ok := kvs.store[key]
	return val, ok
}

// Delete a key from the store.
func (kvs *KeyValueStore) Delete(key string) {
	kvs.lock.Lock()
	defer kvs.lock.Unlock()
	delete(kvs.store, key)
}

// handleConnection handles each client connection.
func handleConnection(conn net.Conn, store *KeyValueStore) {
	defer conn.Close()

	scanner := bufio.NewScanner(conn)
	for scanner.Scan() {
		cmd := strings.Split(scanner.Text(), " ")
		switch cmd[0] {
		case "SET":
			if len(cmd) != 3 {
				fmt.Fprintf(conn, "ERROR: Usage: SET <key> <value>\n")
				continue
			}
			store.Set(cmd[1], cmd[2])
			fmt.Fprintf(conn, "OK\n")
		case "GET":
			if len(cmd) != 2 {
				fmt.Fprintf(conn, "ERROR: Usage: GET <key>\n")
				continue
			}
			value, ok := store.Get(cmd[1])
			if !ok {
				fmt.Fprintf(conn, "NOT FOUND\n")
				continue
			}
			fmt.Fprintf(conn, "%s\n", value)
		case "DELETE":
			if len(cmd) != 2 {
				fmt.Fprintf(conn, "ERROR: Usage: DELETE <key>\n")
				continue
			}
			store.Delete(cmd[1])
			fmt.Fprintf(conn, "OK\n")
		default:
			fmt.Fprintf(conn, "ERROR: Unknown command\n")
		}
	}
}

func main() {
	listener, err := net.Listen("tcp", ":5000")
	if err != nil {
		fmt.Println("Error starting server:", err)
		return
	}
	defer listener.Close()

	store := NewKeyValueStore()

	fmt.Println("Server is listening on port 5000...")
	for {
		conn, err := listener.Accept()
		if err != nil {
			fmt.Println("Error accepting connection:", err)
			continue
		}

		go handleConnection(conn, store)
	}
}