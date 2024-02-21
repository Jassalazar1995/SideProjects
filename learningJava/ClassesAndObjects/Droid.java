package ClassesAndObjects;

public class Droid {
    // defining instance field
    double batteryLevel;
    String name;

    public Droid(String droidName) {
        name = droidName;
        batteryLevel = 100;
    }

    public String toString(){
        return "Hello, I'm the droid: " + name;
    }

    public void performTask(String task) {
        System.out.println(name + " is performing task: " + task);
        batteryLevel -= 10;
    }

    public static void main(String[] args) {
        Droid codey = new Droid("Codey");
        System.out.println(codey.toString());
        codey.performTask("break dance");
        System.out.println(codey.batteryLevel);
    }
}
