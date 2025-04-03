package main.najah.test;

import static org.junit.jupiter.api.Assertions.*;
import java.util.concurrent.TimeUnit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import main.najah.code.Recipe;
import main.najah.code.RecipeBook;

public class RecipeBookTest {
	private RecipeBook recipeBook;
    private Recipe recipe;

    @BeforeEach
    void setUp() {
    	recipeBook = new RecipeBook();
    	recipe = new Recipe();
    	recipe.setName("crepe");
    }
    
    @DisplayName("Adding new recipe")
    @Test
    void testAddRecipe() {
    	assertTrue(recipeBook.addRecipe(recipe), "Recipe should be added successfully");
    }
    
    @Test
    @DisplayName("Deleting an recipe")
    @Order(1)
    void testDeleteRecipe() {
        recipeBook.addRecipe(recipe);
        assertEquals("crepe", recipeBook.deleteRecipe(0), "Should return the deleted recipe name");
    }
    
    @Timeout(value = 1000, unit = TimeUnit.MILLISECONDS)
    @Test
    @DisplayName("Timeout for adding a recipe")
    void testAddRecipeTimeout() {
        recipeBook.addRecipe(recipe);
    }
}
