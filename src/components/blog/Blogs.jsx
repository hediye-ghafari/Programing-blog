import { useQuery } from "@apollo/client/react";
import { Grid } from "@mui/material";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEL from "../../shared/CardEL";
import Loader from "../../shared/Loader";
function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader />;
  if (error) {
    console.log(error);
    return <h3>ERROR...</h3>;
  }

  console.log(data);
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid key={post.id} item size={{ xs: 12, sm: 6, md: 4 }}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
