'use client';

import { useRouter } from "next/navigation";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MovieModalReviews({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // vuelve a /movies sin recargar
  };

  return (
    <Modal
      open
      onClose={handleClose}
      aria-labelledby="movie-modal-title"
      aria-describedby="movie-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          color: "#000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 400,
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="movie-modal-title" variant="h6" component="h2">
          Película #{params.id}
        </Typography>
        <Typography id="movie-modal-description" sx={{ mt: 2 }}>
          Aquí van los detalles de la película...
        </Typography>
      </Box>
    </Modal>
  );
}
