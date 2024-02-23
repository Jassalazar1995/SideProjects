
/*
A program that determines whether there is a protein in a stand of DNA.
A protein has the following qualities: It begins with a start codon: ATG
and it ends with a stop codon: TGA. In between each aditional codon is a sequence of three 
nucleotides. ATGCGATACTGA is a protein because it has the start codon ATG, the stop codon TGA, and the length is divisible by 3.
Author: Jose Salazar
Date: 2/21/2024
*/
import java.util.ArrayList;

public class DNA {
  
  String dna1 = "ATGCGATACGCTTGA";
  String dna2 = "ATGCGATACGTGA";
  String dna3 = "ATTAATATGTACTGA";

 

  public int findLength( String dna ){
    System.out.println(dna.length());
    return dna.length();
  }

  public boolean determineProtein (String dna){
    if(dna.substring(0,3).equals("ATG") && dna.substring(dna.length()-3).equals("TGA") && dna.length()%3 == 0){
        System.out.println("Protein");
        return true;
      } else{
        System.out.println("No protein");
        return false;
      }
  }

  public static void main(String[] args) {
            
    //  -. .-.   .-. .-.   .
    //    \   \ /   \   \ / 
    //   / \   \   / \   \  
    //  ~   `-~ `-`   `-~ `-
    DNA dn = new DNA();
    ArrayList<String> dna = new ArrayList<String>();
    dna.add(dn.dna1);
    dna.add(dn.dna2);
    dna.add(dn.dna3);

    for(int i = 0; i < dna.size(); i++){
        dn.determineProtein(dna.get(i));
        System.out.println(dna.get(i));
    }
    
  }
  
}