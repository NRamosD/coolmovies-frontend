export interface MovieReview {
    id: string;             
    title: string;          
    body?: string | null;   
    rating?: number | null; 
    movieId: string;        
    userReviewerId: string; 
}