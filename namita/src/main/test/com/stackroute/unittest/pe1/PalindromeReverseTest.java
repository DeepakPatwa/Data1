import org.junit.Test;

import static org.junit.Assert.*;

public class PalindromeReverseTest {
    @Test
    public void testReverseString() throws Exception{
        String expectedValue = "Yes";
        Palindrome data=new Palindrome();
        String actualValue=data.IsPalindrome("namiman");
        assertEquals(expectedValue, actualValue);
        @Test
        public void testReverseString() throws Exception{
            String expectedValue1 = "maniman";
            Palindrome var=new Palindrome();
            String actualValue1=var.Reverse("namiman");
            assertEquals(expectedValue, actualValue);
    }
}}