package main

import (
    "fmt"
    "net/http"
    "time"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Welcome to the Go HTTP Server!")
    })

    http.HandleFunc("/time", func(w http.ResponseWriter, r *http.Request) {
        currentTime := time.Now().Format(time.RFC1123)
        fmt.Fprintf(w, "Current server time: %s", currentTime)
    })

    fmt.Println("Server starting on port 8080...")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Printf("Error starting server: %s\n", err)
        return
    }
}
