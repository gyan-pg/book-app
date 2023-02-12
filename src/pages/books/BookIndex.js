import { ModeEdit } from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Fab,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const BookIndex = ({ books }) => {
    const navigate = useNavigate();
    const goToSearch = () => {
        navigate("/search");
    };
    const goToEdit = (id) => {
        navigate(`/edit/${id}`);
    };
    return (
        <>
            <Container component="section" maxWidth="xl" sx={{ my: 2 }}>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={goToSearch}
                >
                    検索する
                </Button>
            </Container>
            <Container component="section" maxWidth="lg">
                <Grid container spacing={4}>
                    {books.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{ height: "100%" }}>
                                <Grid container>
                                    <Grid item sm={4}>
                                        <CardMedia
                                            component="img"
                                            image={card.image.smallThumbnail}
                                            alt={card.title}
                                        />
                                    </Grid>
                                    <Grid item sm={8}>
                                        <CardContent>
                                            <Typography
                                                sx={{ fontSize: "16px" }}
                                            >
                                                タイトル：{card.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    mb: 1.5,
                                                }}
                                            >
                                                読んだ日：{card.readDate}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    mb: 1.5,
                                                }}
                                            >
                                                感想：{card.memo}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Fab
                                                color="primary"
                                                onClick={() =>
                                                    goToEdit(card.id)
                                                }
                                            >
                                                <ModeEdit />
                                            </Fab>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default BookIndex;
