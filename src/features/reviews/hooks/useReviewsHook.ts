import React, { useEffect } from 'react'
import { useListMoviesLazyQuery } from '../../../generated/graphql';
import { useRouter } from 'next/navigation';

type Props = {
    enableFetchMovies?: boolean
}

export const useReviewsHook = ({ enableFetchMovies = false }: Props) => {
    const router = useRouter();

    const [fetchMovies, { data: dataMovies, loading: loadingMovies }] =
        useListMoviesLazyQuery({
            fetchPolicy: 'network-only',
        });

    const handleOpen = (id: string) => router.push(`/reviews?id=${id}`);
    const handleClose = () => router.push("/reviews");


    useEffect(() => {
        if (enableFetchMovies) {
            fetchMovies();
        }
    }, [])


    return {
        dataMovies,
        loadingMovies,
        handleOpen,
        handleClose,
    }
}
