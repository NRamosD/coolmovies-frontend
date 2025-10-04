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
import Link from 'next/link'

type Props = {
  id: string
  title: string
  imgUrl?: string | null
  releaseDate?: string | null
  movieDirectorId?: string | null
  userCreatorId?: string | null
  description?: string
  rating?: number // 0-5 scale
  onClick?: (id: string) => void
  sx?: SxProps<Theme>
}

const FALLBACK_POSTER = 'https://via.placeholder.com/300x450?text=No+Image'

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const MovieComponent: React.FC<Props> = ({
  id,
  title,
  imgUrl,
  releaseDate,
  movieDirectorId,
  userCreatorId,
  description,
  rating,
  onClick,
  sx,
}) => {
  const year = releaseDate ? new Date(releaseDate).getFullYear() : undefined
  const autoDescriptionParts: string[] = []
  if (year) autoDescriptionParts.push(`${year}`)
  if (movieDirectorId) autoDescriptionParts.push(`Dir: ${movieDirectorId}`)
  if (userCreatorId) autoDescriptionParts.push(`By: ${userCreatorId}`)
  const autoDescription = autoDescriptionParts.join(' • ')

  const displayDescription = description ?? autoDescription
  const displayImg = imgUrl || FALLBACK_POSTER
  const normalizedRating = rating != null ? clamp(rating, 0, 5) : undefined

  return (
    <Link key={id} href={`/movies/${id}`} style={{ textDecoration: "none" }}>
    <Card sx={{ maxWidth: "fit-content", ...sx }}>
      <CardActionArea onClick={() => onClick?.(id)}>
        <CardMedia
          component="img"
          height="300"
          image={displayImg}
          alt={`${title} poster`}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6" noWrap title={title}>
              {title}
            </Typography>
            {displayDescription && (
              <Typography variant="body2" color="text.secondary" noWrap title={displayDescription}>
                {displayDescription}
              </Typography>
            )}
            <Box display="flex" alignItems="center" gap={1}>
              <Rating value={normalizedRating ?? 0} precision={0.5} readOnly size="small" />
              <Typography variant="caption" color="text.secondary">
                {normalizedRating != null ? normalizedRating.toFixed(1) : 'Sin calificación'}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  )
}

export default MovieComponent