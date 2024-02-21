package ClassesAndObjects;

/*
This program uses classes, methods, and objects to create a simple arithmetic calculator. The calculator checks for division by zero.
Author: Jose Salazar
Date: 2/20/2024
*/

public class Calculator {

    public Calculator() {

    }

    public double add(double a, double b) {
        double sum = a + b;
        return sum;
    }

    public double subtract(double a, double b) {
        double diff = a - b;
        return diff;
    }

    public double multiply(double a, double b) {
        double mult = a * b;
        return mult;
    }

    public double divide(double a, double b) {
        if (b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        } else {
            double quot = a / b;
            return quot;
        }

    }

    public double mod(double a, double b) {
        double sum = a % b;
        return sum;
    }

    public static void main(String[] args) {
        Calculator myCalculator = new Calculator();
        double solution = myCalculator.add(4.3, 5.2);
        System.out.println(solution);
        solution = myCalculator.subtract(4.3, 5.2);
        System.out.println(solution);
        solution = myCalculator.multiply(4, 2);
        System.out.println(solution);
        solution = myCalculator.divide(4, 0);
        System.out.println(solution);
        solution = myCalculator.mod(4, 3);
        System.out.println(solution);
    }
}
