interface IResponses {
  message?: string;
  status: number;
  results?: object | null;
  error?: boolean;
  errors?: object | null;
}

export const error = ({
  message,
  status,
  error = true,
  errors,
}: IResponses) => {
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];
  const find = codes.find((code) => code === status);

  status = !find ? 500 : find;

  return {
    message,
    code: status,
    error: error,
    errors,
  };
};

export const success = ({
  message,
  results,
  status,
  error = false,
}: IResponses) => {
  return {
    message,
    error: error,
    code: status,
    results,
  };
};
