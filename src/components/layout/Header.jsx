import { AppBar, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            وبلاگ برنامه نویسی
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
