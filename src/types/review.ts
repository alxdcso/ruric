export interface Review {
  id: string;
  firstName: string;
  lastName: string;
  stars: number;
  text: string;
  createdAt: string;
}

export interface CreateReviewPayload {
  firstName: string;
  lastName: string;
  stars: number;
  text: string;
}