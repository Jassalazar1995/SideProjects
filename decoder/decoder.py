def decode(message_file):

    lines = message_file.strip().split('\n')
    
    # Built dictionary of numbers and words
    number_word_dict = {}
    for line in lines:
        number, word = line.split(' ', 1)
        number_word_dict[int(number)] = word
    
    # Sort the dictionary by key to get the numbers in ascending order
    sorted_numbers = sorted(number_word_dict.keys())
    print(sorted_numbers)
    # Build the pyramid structure to find the numbers at the end of each pyramid line
    pyramid_numbers = []
    current_line_length = 1
    current_line = []
    for number in sorted_numbers:
        print(pyramid_numbers)
        current_line.append(number)
        if len(current_line) == current_line_length:
            pyramid_numbers.append(current_line[-1])
            current_line_length += 1
            current_line = []
    
    # Decode the message by concatenating the words corresponding to the pyramid numbers
    decoded_message = ' '.join(number_word_dict[number] for number in pyramid_numbers)
    
    return decoded_message

# Path to your .txt file
file_path = 'coding_qual_input.txt'

with open(file_path, 'r') as file:
    file_content = file.read()
    decoded_message = decode(file_content)

print(decoded_message)