package ClassesAndObjects;
/*
A program that will calculate the monthly car payment
a user should expect to make after taking out a car loan.
It will include: Car loan amount, interest rate of the loan, length of the loan (in years)
and the down payment.
Author: Jose Salazar
Date: 2/20/2024
*/

public class CarLoan {
	public static void main(String[] args) {
    int carLoan = 10000;
    int loanLength = 3; // in years
    int interestRate = 5; // in percent
    int downPayment = 2000;
    if (loanLength <= 0 || interestRate <= 0){
      System.out.println("Error! You must take out a valid car loan");
    } else if( downPayment >= carLoan ) {
      System.out.println("The car can be paid in full.");
    } else {
      int remainingBalance = carLoan - downPayment;
      int months = loanLength * 12;
      double monthlyBalance = remainingBalance / months;
      double interest = (monthlyBalance * interestRate) / 100;
      double monthlyPayment = monthlyBalance + interest;
      System.out.println(monthlyPayment);
    }

	}
}