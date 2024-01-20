import axios, { AxiosResponse } from "axios";
import { cache } from "react";

type BaseRequest<V, T = {}> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<V> = {
  code: "success";
  data: V;
};

type ErrorResponse<E> = {
  code: "error";
  error: E;
};

// type BaseResponse<V, E> = SuccessResponse<V> | ErrorResponse<E>;

// OR

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;
const BaseResponse = Promise;

export const RequestHandler = <V, E, T = {}>(request: BaseRequest<V, T>) =>
  // This cache function only memoize the request | on request lifecycle so no need to revalidate
  cache(async (params?: T): BaseResponse<V, E> => {
    try {
      const response = await request(params);
      return {
        code: "success",
        data: response.data,
      };
    } catch (err) {
      // TODO: Handle error more effectively
      return {
        code: "error",
        error: err as E,
      };
    }
  });

// export const DataFetcher = async <T, V, E>(
//   request: BaseRequest<T, V>,
//   params?: T
// ): Promise<BaseResponse<V, E>> => {
//   try {
//     const response = await request(params);
//     return {
//       code: "success",
//       data: response.data,
//     };
//   } catch (err) {
//     return {
//       code: "error",
//       error: err as E,
//     };
//   }
// };
