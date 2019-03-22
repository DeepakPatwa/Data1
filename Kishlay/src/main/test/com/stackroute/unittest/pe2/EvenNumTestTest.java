package com.stackroute.unittest.pe2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class EvenNumTestTest {

    EvenNumTest obj;
    @Before
    public void setUp() throws Exception {
        EvenNumTest obj = new EvenNumTest();
    }

    @After
    public void tearDown() throws Exception {
        EvenNumTest obj = null;
    }

    @Test
    public void isEven() {
        assertEquals(true,obj.isEven(2));
        assertEquals(false,obj.isEven(67));
        assertEquals(true,obj.isEven(0));
        assertEquals(false,obj.isEven(89));
        assertEquals(true,obj.isEven(3454));
        assertEquals(false,obj.isEven(905));
        assertEquals(true,obj.isEven(4532));
        assertEquals(false,obj.isEven(200065));
        assertEquals(true,obj.isEven(2000));
        assertEquals(false,obj.isEven(21111));
    }
}