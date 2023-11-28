import express from "express";
import * as booksController from "../controllers/books_controller";

export const router = express.Router();
router.get("/books", booksController.getBooks);
router.get("/books/:bookID", booksController.getBook);
router.post("/books", booksController.saveBook);
// User Story 5: Delete a Book by ID
router.delete("/books/:bookID", booksController.deleteBook);

// User Story 4 - Update Book By Id Solution
router.put("/books/:bookId", booksController.updateBook);
