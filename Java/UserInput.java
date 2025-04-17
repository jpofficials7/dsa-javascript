import java.util.Scanner;

public class UserInput {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Please enter name:");
    String name = scanner.nextLine();

    System.out.println("Please enter age:");
    int age = scanner.nextInt();
    System.out.println("Please enter salary:");
    double salary = scanner.nextDouble();

    // Output input by user
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);

    scanner.close();
  }
}