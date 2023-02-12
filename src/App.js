import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./common/Layout";
import { useParsit } from "./hooks/usePersit";
import BookDetail from "./pages/books/BookDetail";
import BookEdit from "./pages/books/BookEdit";
import BookIndex from "./pages/books/BookIndex";
import BookSearch from "./pages/books/BookSearch";
import MuiTest from "./pages/MuiTest";

function App() {
    const STORAGE_KEY = "books";
    const [books, setBooks] = useParsit(STORAGE_KEY);

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<BookIndex books={books} />}></Route>
                    <Route
                        path="search"
                        element={
                            <BookSearch books={books} setBooks={setBooks} />
                        }
                    ></Route>
                    <Route path="edit" element={<BookEdit />}>
                        <Route
                            path=":id"
                            element={
                                <BookDetail books={books} setBooks={setBooks} />
                            }
                        ></Route>
                    </Route>
                </Route>
                <Route path="mui-test" element={<MuiTest />}></Route>
            </Routes>
        </>
    );
}

export default App;
