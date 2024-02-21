package ClassesAndObjects;
import java.util.ArrayList;

import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("Get Down");
    desertIslandPlaylist.add("Funky Town");
    desertIslandPlaylist.add("Soul man");
    desertIslandPlaylist.add("Boogie Town");
    desertIslandPlaylist.add("X gunna give it to ya");
    desertIslandPlaylist.add("Crazy");
    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());
    desertIslandPlaylist.remove("Boogie Town");
    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());
    int a = desertIslandPlaylist.indexOf("Crazy");
    int b = desertIslandPlaylist.indexOf("Get Down");
    System.out.println("Index is :" + a);
    String tempA = desertIslandPlaylist.get(a);
    System.out.println("The song is :" + tempA);
    String tempB = desertIslandPlaylist.get(b);
    System.out.println("Index is :" + b);
     System.out.println("The song is :" + tempB);
    desertIslandPlaylist.set(a, tempB);
    desertIslandPlaylist.set(b, tempA);
    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());


  }
  
}