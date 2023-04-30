import { IImage } from "../types";
import axios from 'axios';

const PIXABEY_KEY = '28393009-563cada9a4af8f72bfd4d9668';
const BASE_HTTP = 'https://pixabay.com/api/';

interface IResponse {
  total: number,
  totalHits: number,
  hits: IImage[]
}

async function get<T>(
    path: string
): Promise<T> {
    const { data } = await axios.get(path);
    return data;
};

export async function getImages(value: string, page: number) {
    const params = {
        key: PIXABEY_KEY,
        q: `${value}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: "12",
        page: `${page}`,
    }
  const searchParams = new URLSearchParams(params);
  try {
    return await get<IResponse>(`${BASE_HTTP}?${searchParams.toString()}`);
  } catch (error) {
    console.error(error)
  }   
};