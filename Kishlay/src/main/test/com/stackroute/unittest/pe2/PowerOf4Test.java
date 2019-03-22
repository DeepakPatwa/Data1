package com.stackroute.unittest.pe2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class PowerOf4Test {

    PowerOf4 obj;
    @Before
    public void setUp() throws Exception {
        PowerOf4 obj = new PowerOf4();
    }

    @After
    public void tearDown() throws Exception {
        PowerOf4 obj = null;
    }

    @Test
    public void checkPowerOf4() {
        assertEquals(true,obj.checkPowerOf4(16));
        assertEquals(true,obj.checkPowerOf4(64));
        assertEquals(false,obj.checkPowerOf4(2));
        assertEquals(true,obj.checkPowerOf4(0));
        assertEquals(false,obj.checkPowerOf4(10));
    }
}