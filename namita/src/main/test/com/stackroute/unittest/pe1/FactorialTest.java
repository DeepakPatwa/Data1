import org.junit.Test;

import static org.junit.Assert.*;

public class FactorialTest {
    @Test
    public void testReverseString() throws Exception{
        String expectedValue = "The factorial of 1 is:1,The factorial of 2 is:2,The factorial of 12 is:479001600 ";
        Palindrome data=new Palindrome();
        String actualValue=data.IsPalindrome("12");
        assertEquals(expectedValue, actualValue);
}}