package ClassesAndObjects;

public class Store {

    // declare instance fields here!
    String productType;
    int inventoryCount;
    double inventoryPrice;
    double price;

    // new method: constructor!
    public Store(String product, int count, double initialPrice) {
        productType = product;
        price = initialPrice;
        
    }

    public void advertise() {
        System.out.println("Come spend some money!");
        System.out.println("Selling " + productType + "!");
    }

    // greet customer method
    public void greetCustomer(String customer) {
        System.out.println("Welcome to the store, " + customer + "!");
    }

  // increase price method
  public void increasePrice(double priceToAdd){
    double newPrice = price + priceToAdd;
    price = newPrice;
  }

    // get price with tax method
    public double getPriceWithTax(){
        double totalPrice = price + price*0.08;
        return totalPrice;
      }
    // main method is where we create instances!
    public static void main(String[] args) {
        System.out.println("Start of the main method.");
        
        // create the instance below
        Store lemonadeStand = new Store("lemonade", 42, 0.75);
        // print the instance below
        lemonadeStand.increasePrice(1.5);
    System.out.println(lemonadeStand.price);
        System.out.println(lemonadeStand); // prints memory location
        System.out.println(lemonadeStand.productType); // now it prints out the product type
        lemonadeStand.advertise(); // uses the advertise method
        lemonadeStand.greetCustomer("Jose");
        double lemonadePrice = lemonadeStand.getPriceWithTax();
        System.out.println(lemonadePrice);
        lemonadeStand = null;
        System.out.println(lemonadeStand); // prints null

    }
}