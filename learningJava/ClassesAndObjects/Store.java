package ClassesAndObjects;

public class Store {
  
    // declare instance fields here!
    String productType;
  int inventoryCount;
  double inventoryPrice;
  
    // new method: constructor!
    public Store(String product, int count, double price) {
        productType = product;
      }

    public void advertise() {
        System.out.println("Come spend some money!");
        System.out.println("Selling " + productType +"!");
      }
    // main method is where we create instances!
    public static void main(String[] args) {
      System.out.println("Start of the main method.");
      
      // create the instance below
       Store lemonadeStand = new Store("lemonade", 42, 0.75);
      // print the instance below
      System.out.println(lemonadeStand); // prints memory location
      System.out.println(lemonadeStand.productType); // now it prints out the product type
      lemonadeStand.advertise(); // uses the advertise method
      lemonadeStand = null;
      System.out.println(lemonadeStand); // prints null

    }
  }