package main.najah.test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;

import main.najah.code.Product;

public class ProductTest {
     private Product product;

	@BeforeEach
	void setUp() throws Exception {
		product = new Product("mobile", 5000);
	}

	@Test
	@DisplayName("Applying valid discount")
	void testApplyDiscount() {
		product.applyDiscount(20);
		assertEquals(4000, product.getFinalPrice(),0.01);
	}
	
	@Test
	@DisplayName("Applying invalid a discount")
	void testInvalidDiscount() {
		assertThrows(IllegalArgumentException.class, ()-> product.applyDiscount(100));
	}
	
	@Test
	@DisplayName("Applying zero discount should not change price")
	void testZeroDiscount() {
	    product.applyDiscount(0);
	    assertEquals(5000, product.getFinalPrice(), 0.01);
	}

	@Test
    @DisplayName("Timeout for discount application")
    @Timeout(value = 2000, unit = TimeUnit.MILLISECONDS)
    void testDiscountTimeout() {
        product.applyDiscount(10);
    }

}
