import { environment } from "../environments/environment.prod";

const apiUrl = environment.apiUrl; 

export async function send(data: any) {
  const response = await fetch(`${apiUrl}/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return true;
}