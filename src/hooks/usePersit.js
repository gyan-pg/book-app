import { useEffect, useState } from "react";

export const useParsit = (STORAGE_KEY) => {
    const [books, setBooks] = useState(() => {
        const bookData = localStorage.getItem(STORAGE_KEY);
        const parse = JSON.parse(bookData);
        return parse || [];
    });

    useEffect(() => {
        console.log("setBooks");
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }, [books]);
    return [books, setBooks];
};
