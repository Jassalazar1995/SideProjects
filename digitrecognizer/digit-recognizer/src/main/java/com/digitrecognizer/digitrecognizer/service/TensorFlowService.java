package com.digitrecognizer.digitrecognizer.service;

import org.tensorflow.Graph;
import org.tensorflow.Session;
import org.tensorflow.Tensor;
import org.tensorflow.TensorFlow;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class TensorFlowService {

    private Session session;
    private Graph graph;

    public TensorFlowService() {
        initializeModel();
    }

    private void initializeModel() {
        // Assuming your model file is named "model.pb" and is located in the "resources" directory
        Path modelPath = Paths.get(getClass().getResource("/model.pb").toURI());
        byte[] graphDef = Files.readAllBytes(modelPath);

        graph = new Graph();
        graph.importGraphDef(graphDef);

        session = new Session(graph);
        System.out.println("Model loaded successfully.");
    }

    public int recognizeDigit(byte[] imageData) {
        // Placeholder for the preprocessing and prediction logic
        return -1;
    }
    
    // Don't forget to close the TensorFlow session and graph resources when your application shuts down.
    public void close() {
        if (session != null) session.close();
        if (graph != null) graph.close();
    }
}