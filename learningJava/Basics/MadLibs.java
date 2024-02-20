package Basics;
public class MadLibs {
    /*
    This program generates a mad libbed story
    Author: Jose
    Date: 2/19/2024
    */
        public static void main(String[] args){
        String name1 = "Jose";
        String name2 = "Amanda";
        String adjective1 = "happy";
        String adjective2 = "joyous";
        String adjective3 = "fun";
        String noun1 = "chair";
        String noun2 = "door";
        String noun3 = "Empire State Building";
        String noun4 = "coffee";
        String noun5 = "wrench";
        String noun6 = "flower";
        int number = 4;
        String place1 = "Jupiter";
        String verb1 = "hugged";
        //The template for the story
        String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";
  
        System.out.println(story);
      }       
  }
  