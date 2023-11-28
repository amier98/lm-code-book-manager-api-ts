import { Request, Response } from "express";
import * as bookService from "../services/books";

export const getBooks = async (req: Request, res: Response) => {
	const books = await bookService.getBooks();
	res.json(books).status(200);
};

export const getBook = async (req: Request, res: Response) => {
	const bookID = req.params.bookId;
	const book = await bookService.getBook(Number(bookID));

	if (book) {
		res.json(book).status(200);
	} else {
		res.status(404).json("Not found");
	}
};

export const saveBook = async (req: Request, res: Response) => {
	const bookToBeSaved = req.body;
	try {
		const book = await bookService.saveBook(bookToBeSaved);
		res.status(201).json(book);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (req: Request, res: Response) => {
	const bookUpdateData = req.body;
	const bookID = Number.parseInt(req.params.bookID);

	const book = await bookService.updateBook(bookID, bookUpdateData);
	res.status(204).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
	const bookID = Number.parseInt(req.params.bookID);

	await bookService.deleteBook(bookID);

	res.status(204).end();
};
