import static org.junit.Assert.*;

public class FrequencyTest {
    public void testFrequency() throws Exception{
        //Arranga
        String expectedValue = "i-5,am-4,this-6";

        Frequency test = new Frequency();
        //Act
        String actualValue = test.test("FileDemo.txt");
        //Assert
        assertEquals(expectedValue, actualValue);

    }

}