package com.stackroute.unittest.pe2;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class StudentMaxMinAvgTest {

    StudentMaxMinAvg obj;
    @Before
    public void setUp() throws Exception {
        StudentMaxMinAvg obj = new StudentMaxMinAvg();
    }

    @After
    public void tearDown() throws Exception {
        StudentMaxMinAvg obj = null;
    }

    @Test
    public void studentMax() {
        int[] arr = new int[4];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        assertEquals(4,obj.StudentMax(arr));
    }

    @Test
    public void studentMin() {
        int[] arr = new int[4];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        assertEquals(1,obj.StudentMin(arr));
    }

    @Test
    public void studentAvg() {
        int[] arr = new int[4];
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        arr[3] = 4;
        assertEquals(2.5,obj.StudentAvg(arr), 0.001);
    }
}