import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookID: number) => {
	return Book.findOne({
		where: { bookID },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookID: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookID,
		},
	});
};

export const deleteBook = async (bookID: number) => {
	return Book.destroy({ where: { bookID } });
};
