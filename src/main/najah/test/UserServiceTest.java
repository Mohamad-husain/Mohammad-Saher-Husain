package main.najah.test;

import static org.junit.jupiter.api.Assertions.*;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import main.najah.code.UserService;

public class UserServiceTest {
	private UserService userService;
	
	@BeforeEach
    void setUp() {
        userService = new UserService();
    }
	
	@ParameterizedTest
    @DisplayName("Valid email formats")
	@ValueSource(strings = {"mohammad@gmail.com", "saher@gmail.com", "husain@gmail.com"})
	void testValidEmails(String email) {
		assertTrue(userService.isValidEmail(email), "Email is valid");
	}
	
	@Test
    @DisplayName("Invalid email")
    void testInvalidEmail() {
        assertAll(
            () -> assertFalse(userService.isValidEmail("mohammad.husain")),
            () -> assertFalse(userService.isValidEmail("mohammadHusain.com"))
        );
    }
	
	@Test
    @DisplayName("Authentication Test")
	void authenticationTest() {
        assertTrue(userService.authenticate("admin", "1234"));
        assertFalse(userService.authenticate("user", "wrong"));
	}

	@Timeout(value = 2000, unit = TimeUnit.MILLISECONDS)
	@Test
	@DisplayName("Timeout for email validation")
	void testEmailValidationTimeout() {
		userService.isValidEmail("mohammad@gmail.com");
	}
}
