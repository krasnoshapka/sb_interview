import {API_KEY, API_URL} from "./conf";
import axios from "axios";

export async function fetchMovies(query, page) {
  const response = await axios
    .get(API_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        page: page
      }
    });
  if (response.status == 200) {
    const {Search, totalResults, Response} = response.data;
    if (Response == 'True') {
      return {Search, totalResults};
    } else {
      throw new Error(Response);
    }
  }
  throw new Error(response.status);
}

export async function fetchMovie(id) {
  const response = await axios
    .get(API_URL, {
      params: {
        apikey: API_KEY,
        i: id
      }
    });
  if (response.status == 200) {
    return response.data;
  }
  throw new Error(response.status);
}