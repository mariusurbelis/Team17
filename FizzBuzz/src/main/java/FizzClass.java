/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author daniel
 */
public class FizzClass {
    
    private int loops;
    
    public FizzClass(int number) {
        loops = number;
    }
    
    
    public FizzClass() {
        loops = 100;
        
    }
    
    /**
     * method runs a loop from 0 to loops, and at each iteration tests if i is
     * equal to 3, 5 or 5 and 3. if it is equal to 3 it outputs FIZZ, if 5 then 
     * BUZZ, if 5 and 3 then FIZZBUZZ, otherwise it just outputs the number
     */
    public void fizzBuzz() {
        for(int i = 0; i < loops; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FIZZBUZZ");
            } else if (i % 3 == 0) {
                System.out.println("FIZZ");
            } else if (i % 5 == 0) {
                System.out.println("BUZZ");
            } else {
                System.out.println(i);
            }
        }
    }
    
    
    static public void main(String[] args) { 
        FizzClass myClass = new FizzClass(10);
        
        myClass.fizzBuzz();
        
        System.out.println("First cycle down");
        
        FizzClass mySecondClass = new FizzClass();
        
        mySecondClass.fizzBuzz();
        
        
    }
}


