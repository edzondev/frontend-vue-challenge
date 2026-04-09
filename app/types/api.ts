export interface APIError {
  success: false;
  data: {
    name:
      | "DUPLICATE_DNI"
      | "DUPLICATE_PHONE"
      | "INVALID_PHONE"
      | "SERVER_ERROR";
    title: string;
    message: string;
  };
}

export interface APISuccess<T> {
  success: true;
  data: T;
}

export type APIResponse<T> = APISuccess<T> | APIError;
