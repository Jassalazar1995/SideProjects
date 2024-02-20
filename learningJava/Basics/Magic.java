package Basics;
public class Magic {
    public static void main(String[] args) {
        // The Original Number
        // 2 seems to be an unique case 
        int myNumber = 8;
        int stepOne = myNumber * myNumber;
        int stepTwo = stepOne + myNumber;
        int stepThree = stepTwo / myNumber;
        int stepFour = stepThree + 17;
        int stepFive = stepFour - myNumber;
        int stepSix = stepFive /6;
        int magicNumber = stepSix;
        System.out.println(magicNumber);
        
    }
}
