import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { axios } from 'utils/axios';

const example = async (): Promise<{ data?: string; errorMessage?: string }> => {
  try {
    const {
      data: { token },
    } = await axios.request<{ token: string }>({
      method: 'POST',
      url: endpoints.example.endpoint(),
    });
    return { data: token };
  } catch (error) {
    const errorAxios = error as AxiosError<any>;
    if (errorAxios.response) {
      if (errorAxios.response.status === 404) {
        return { errorMessage: ApiErrors.NotFound };
      }
      if (errorAxios.response.status === 422) {
        return { errorMessage: ApiErrors.UnexpectedEntity };
      }
    }
    return { errorMessage: ApiErrors.SomethingGoesWrong };
  }
};

export const exampleApi = {
  example,
};
