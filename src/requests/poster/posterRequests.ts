import request from "Configs/request";
import { MapLocationType } from "types";

export const getPosterList = async () => {
  return await request.get("/posters").then((data: any) => {
    return data;
  });
};

export const getAddressFromLatLng = (location: MapLocationType) => {
  let myHeaders = new Headers();
  myHeaders.append("Api-Key", "service.0906cb8f5bb342a6baa504f9eac27983");

  let requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    `https://api.neshan.org/v2/reverse?lat=${location.lat}&lng=${location.lng}`,
    requestOptions
  ).then((response) => response.json());
};

export const saveNewPoster = async (data: any) => {
  console.log(data);
  return await request.post("/posters", data).then((data: any) => {
    return data;
  });
};

export const getSinglePoster = async (id: string | undefined) => {
  return await request.get(`/posters/${id}`).then((data: any) => {
    return data;
  });
};
