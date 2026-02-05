import type { CreateReviewPayload, Review } from "@/types/review";

const API_URL = "https://api.ruric-service.com/v1";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `Request failed: ${res.status}`);
  }

  if (res.status === 204) return undefined as unknown as T;

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text().catch(() => "");
    return text as unknown as T;
  }

  return (await res.json()) as T;
}


export const ReviewsService = {
  getAll(): Promise<Review[]> {
    return request<Review[]>("/review/all");
  },

  create(payload: CreateReviewPayload): Promise<Review> {
    return request<Review>("/review/create", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};