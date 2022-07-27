export class BaseApi {
  protected apiPrefix: string

  constructor(apiPrefix: string) {
    this.apiPrefix = apiPrefix
  }

  protected request(method: HttpMethod, url: string, params: any) {
    const { body, headers } = params
    const reqBody = typeof body === 'string' ? body : JSON.stringify(body)
    return fetch(this.apiPrefix + url, {
      method: method,
      body: reqBody,
      headers,
    })
  }
}

export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
