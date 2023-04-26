import http from "./constants/httpConfig";

class Request {
  get(url: string) {
    return http.get(url);
  }

  post(url: string, data: any) {
    return http.post(url, data);
  }

  put(url: string, data: any) {
    return http.put(url, data);
  }

  delete(url: string, data: any) {
    return http.delete(url, data);
  }
}

const request = new Request();

export default request;
