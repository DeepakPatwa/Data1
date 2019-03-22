package com.stackroute.unittest.pe2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class FactorialsTest {
    Factorials obj;
    @Before
    public void setUp() throws Exception {
        Factorials obj = new Factorials();
    }

    @After
    public void tearDown() throws Exception {
        Factorials obj;
    }

    @Test
    public void intFactorial() {
        assertEquals(24,obj.intFactorial(4));
        assertEquals(1,obj.intFactorial(1));
        assertEquals(6,obj.intFactorial(3));
        assertEquals(2,obj.intFactorial(2));
        assertEquals(120,obj.intFactorial(5));
    }

    @Test
    public void longFactorial() {
        assertEquals(120,obj.longFactorial(5));
        assertEquals(40320,obj.longFactorial(8));
        assertEquals(720,obj.longFactorial(6));
        assertEquals(3628800,obj.longFactorial(10));
        assertEquals(362880,obj.longFactorial(9));
    }
}