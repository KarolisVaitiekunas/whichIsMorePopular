import fetch from "isomorphic-fetch";

export interface Igame {
  name: string;
  image: string;
  reviews: string;
  reviewCount: string;
  link: string;
}

// const PORT = process.env.REACT_APP_SERVER_PORT;

const HOST = String(process.env.NEXT_PUBLIC_HOST);
const PORT = Number(process.env.NEXT_PUBLIC_SERVER_PORT);

export const getGames = async (host: string): Promise<Igame[]> => {
  try {
    const response = await fetch(`http://${host}:5501/games`, { method: "GET" });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
