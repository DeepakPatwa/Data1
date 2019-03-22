import org.junit.Test;

import static org.junit.Assert.*;

public class PowerOfFourTest {
    @Test
    public void testReverseString() throws Exception{
        String expectedValue = "Y";
        PowerOfFour data=new PowerOfFour();
        String actualValue=data.isPower("4");
        assertEquals(expectedValue, actualValue);}
    @Test
    public void testReverseString() throws Exception{
        String expectedValue = "N";
        PowerOfFour data=new PowerOfFour();
        String actualValue=data.isPower("24");
        assertEquals(expectedValue, actualValue);}

}