import { Grid, Skeleton } from "@mui/material";

const nums = [1, 2, 3, 4, 5, 6];

function SkeletonPlaceholder() {
  return (
    <>
      {nums.map((item) => (
        <Grid item xs={2} sm={4} md={4} key={item}>
          <Skeleton variant="rectangular" height={118} />
          <Skeleton
            style={{ marginTop: "8px" }}
            variant="rectangular"
            width="70%"
          />
          <Skeleton
            style={{ marginTop: "8px" }}
            variant="rectangular"
            width="50%"
          />
        </Grid>
      ))}
    </>
  );
}

export default SkeletonPlaceholder;
