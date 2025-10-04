export interface Comment {
    id: string;             
    userId: string;         
    title?: string | null;  
    body?: string | null;   
    movieReviewId: string;  
}