import React from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Box,
  Stack,
} from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import type { MovieNode } from '../../../interfaces/movies.interface'

type Props = {
  movie: MovieNode,
  onClick?: (id: string) => void
  sx?: SxProps<Theme>
}

const FALLBACK_POSTER = 'https://via.placeholder.com/300x450?text=No+Image'

const MovieComponent: React.FC<Props> = ({
  movie,
  onClick,
  sx,
}) => {
  const year = movie?.releaseDate ? new Date(movie?.releaseDate).getFullYear() : undefined

  const displayImg = movie?.imgUrl || FALLBACK_POSTER
  const normalizedRating = movie?.movieReviewsByMovieId != null ? 
    movie?.movieReviewsByMovieId?.nodes?.reduce((acc, review) => acc + (review?.rating||0), 0) / movie?.movieReviewsByMovieId?.totalCount : 0

    console.log(normalizedRating)
  return (
      <CardActionArea sx={{ maxWidth: 250, ...sx }} onClick={() => onClick?.(movie?.id)}>
    <Card>
        <CardMedia
          component="img"
          height={350}
          image={displayImg}
          alt={`${movie?.title} poster`}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" noWrap title={movie?.title}>
              {movie?.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" noWrap title={movie?.releaseDate}>
              {year}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating value={normalizedRating ?? 0} precision={0.5} readOnly size="small" />
              <Typography variant="caption" color="text.secondary">
                {normalizedRating != null ? normalizedRating.toFixed(1) : 'Sin calificación'}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
    </Card>
      </CardActionArea>
  )
}

export default MovieComponent