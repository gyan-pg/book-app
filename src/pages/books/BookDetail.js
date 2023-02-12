import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";
import { format } from "date-fns";

const BookDetail = ({ books, setBooks }) => {
    const navigate = useNavigate();
    const params = useParams();
    const book = books.find((book) => {
        return book.id === parseInt(params.id);
    });

    const [value, setValue] = useState(book.readDate);
    const [memo, setMemo] = useState(book.memo);

    const updateBookInfo = (bookid) => {
        const newList = books.filter((book) => {
            if (book.id === bookid) {
                book.readDate = value;
                book.memo = memo;
                return book;
            } else {
                return book;
            }
        });
        setBooks(newList);
        navigate("/");
    };

    const setNewValue = (newValue) => {
        setValue(format(newValue, "yyyy/MM/dd"));
    };

    return (
        <>
            <Container compornent="section" maxWidth="md" sx={{ mt: 5 }}>
                <Card sx={{ height: "100%" }}>
                    <Grid container>
                        <Grid item sm={4}>
                            <CardMedia
                                component="img"
                                image={book.image.thumbnail}
                                alt={book.title}
                            />
                        </Grid>
                        <Grid sm={8}>
                            <CardContent>
                                <Typography sx={{ mb: 2, fontSize: "18px" }}>
                                    {book.title}
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    読んだ日:
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                        adapterLocale={ja}
                                        dateFormaats={{
                                            monthAndYear: "yyyy年MM月",
                                        }}
                                    >
                                        <DatePicker
                                            label="日付"
                                            value={value}
                                            maxDate={new Date()}
                                            onChange={(newValue) => {
                                                setNewValue(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Box>
                                <Box>
                                    感想: <br />
                                    <TextField
                                        multiline
                                        fullWidth
                                        rows={8}
                                        value={memo}
                                        onChange={(e) => {
                                            setMemo(e.target.value);
                                        }}
                                    />
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Button
                                            component={Link}
                                            to="/"
                                            color="secondary"
                                            variant="contained"
                                        >
                                            一覧に戻る
                                        </Button>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Button
                                            color="info"
                                            variant="contained"
                                            onClick={() =>
                                                updateBookInfo(book.id)
                                            }
                                        >
                                            保存する
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    );
};

export default BookDetail;
