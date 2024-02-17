package com.digitrecognizer.digitrecognizer.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DigitRecognitionController {

    @PostMapping("/recognize")
    public String recognizeDigit(@RequestBody byte[] imageData) {
        // Placeholder for TensorFlow digit recognition logic
        return "Digit Recognized";
    }
}
