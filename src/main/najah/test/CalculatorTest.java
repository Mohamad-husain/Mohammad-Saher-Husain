package main.najah.test;

import static org.junit.jupiter.api.Assertions.*;
import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.Timeout;
import org.junit.jupiter.api.parallel.Execution;
import org.junit.jupiter.api.parallel.ExecutionMode;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import main.najah.code.Calculator;

@Execution(value = ExecutionMode.CONCURRENT)
@DisplayName("Calculator Tests")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CalculatorTest {
	private Calculator calculator;
	
	@BeforeAll
	static void initAll() {
		System.out.println("Initializing CalculatorTest.");
	}
	
	@AfterAll
	static void tearDownAll() {
		System.out.println("after all tests in CalculatorTest.");
	}
	
	@BeforeEach
	void setUp() throws Exception {
		calculator = new Calculator();
        System.out.println("Setting up test case.");
	}
	
	 @AfterEach
	    void tearDown() {
	        System.out.println(" Test case executed.");
	}
	
	@Test
    @Order(1)
	@DisplayName("Addition multiple numbers")
	void testAddition () {
		assertAll(
				() -> assertEquals(10, calculator.add(2,3,5)),
				() -> assertEquals(0, calculator.add()),
				() -> assertEquals(5, calculator.add(5)),
				() -> assertEquals(-4,calculator.add(-2,-2))
				);
	}
	
    @Order(2)
	@DisplayName("Valid divisions")
	@ParameterizedTest
	@CsvSource({"10,2,5", "9,3,3", "-4,2,-2"})
	void testValidDivision(int num1,int num2, int result) {
		assertEquals(result, calculator.divide(num1, num2));
	}
    
    @Order(3)
    @Test
    @DisplayName("Division when numerator is zero")
    void testDivisionByZeroNumerator() {
        assertEquals(0, calculator.divide(0, 5));
    }
	
    @Order(4)
 	@DisplayName("Division by zero should throw exception")
 	@Test
	void testDivisionByZero() {
		assertThrows(ArithmeticException.class, () -> calculator.divide(10, 0));		
	}
	

    @Order(5)
    @Test
    @DisplayName("Factorial computation")
    void testFactorialPositive() {
		assertAll(
				() -> assertEquals(1, calculator.factorial(0)),
				() -> assertEquals(120, calculator.factorial(5)),
				() -> assertEquals(1, calculator.factorial(1))

				);
    }
    
    @Order(6)
    @DisplayName("Factorial of negative number should throw exception")
    @Test
    void testNegativeFactorial () {
    	assertThrows(IllegalArgumentException.class, () -> calculator.factorial(-1));
    }
    
    @Order(7)
    @Test
    @DisplayName("Timeout for addition operation")
    @Timeout(value = 2000, unit = TimeUnit.MILLISECONDS)
    void testAdditionTimeout() {
        calculator.add(1, 2, 3, 4, 5);
    }
    
    @Order(8)
    @Test
    @Disabled
    @DisplayName("failing test")
    void testFailing() {
    	assertEquals(100, calculator.add(10,20));
    }
    
}
