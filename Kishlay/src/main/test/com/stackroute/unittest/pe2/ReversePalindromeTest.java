package com.stackroute.unittest.pe2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ReversePalindromeTest {
    ReversePalindrome obj;
    @Before
    public void setUp() throws Exception {
        ReversePalindrome obj = new ReversePalindrome();
    }

    @After
    public void tearDown() throws Exception {
        ReversePalindrome obj = null;
    }

    @Test
    public void checkReverse() {
        assertEquals("yalhsik",obj.checkReverse("kishlay"));
        assertEquals("",obj.checkReverse(""));
        assertEquals("654looc321",obj.checkReverse("123cool456"));
        assertEquals("lolol",obj.checkReverse("lolol"));
    }

    @Test
    public void checkPalindrome() {
        assertEquals(true,obj.checkPalindrome("haah"));
        assertEquals(true,obj.checkPalindrome(""));
        assertEquals(false,obj.checkPalindrome("675"));
        assertEquals(false,obj.checkPalindrome("675ghjdbh"));
    }
}