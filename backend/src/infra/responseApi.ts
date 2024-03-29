import { getErrorMap } from "zod";

interface ApiResponseProperty {
    message: string;
    error: boolean;
}
  
type ApiDataProperty = object | any[] | null;
  
interface HttpResponse {
    response: ApiResponseProperty;
    data: ApiDataProperty;
}

export const getError = (error: unknown): ApiResponseProperty => {
    
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    const response = {
        error: true,
        message: message || 'Error'
    }
    return response

}

function buildResponse(data: ApiDataProperty, response: Partial<ApiResponseProperty>): HttpResponse {
    const base: HttpResponse = {
      response: {
        message: '',
        error: false,
      },
      data: [],
    };
  
    base.response = { ...base.response, ...response };
    base.data = data;
  
    return base;
}
  
export function buildSuccessResponse(
    data: Partial<ApiDataProperty> = [],
    response: Partial<ApiResponseProperty> = {},
): HttpResponse {
    response.error = response.error || false;
    response.message = response.message || 'Success';
  
    return buildResponse(data, response);
}
  
export function buildErrorResponse(
    response: unknown = {},
): HttpResponse {
    const dataProperty = getError(response)

    return buildResponse([], dataProperty);
}