/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginRequest {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example Kamil123! */
  password?: string;
}

export interface LoginResponse {
  /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc */
  token?: string;
  /** @example 5f3c44c9-eac1-4ffd-a112-ae5a1fe38fed */
  refreshToken?: string;
  /** @example kamilporeba@hotmail.com */
  email?: string;
}

export interface LoginGoogleRequest {
  /** @example token */
  tokenId?: string;
}

export interface LoginGoogleResponse {
  /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc */
  token?: string;
  /** @example 5f3c44c9-eac1-4ffd-a112-ae5a1fe38fed */
  refreshToken?: string;
}

export interface RegisterGoogleResponse {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example googleSub */
  googleSub?: string;
  /** @example 1 */
  id?: number;
  /** @example password */
  password?: string;
  passwordResetDate?: object;
  /** @example resetToken */
  passwordResetToken?: string;
  /** @example refreshToken */
  refreshToken?: string;
}

export interface RegisterGoogleRequest {
  /** @example token */
  tokenId?: string;
}

export interface RegisterRequest {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example Kamil123! */
  password?: string;
  /** @example Kamil123! */
  passwordRepeated?: string;
}

export interface RegisterResponse {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example googleSub */
  googleSub?: string;
  /** @example 1 */
  id?: number;
  /** @example password */
  password?: string;
  passwordResetDate?: object;
  /** @example resetToken */
  passwordResetToken?: string;
  /** @example refreshToken */
  refreshToken?: string;
}

export interface ProfileResponse {
  /** @example kamilporeba@hotmail.com */
  email?: string;
}

export interface RefreshTokenResponse {
  /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc */
  token?: string;
}

export interface ResetStartRequest {
  /** @example kamilporeba@hotmail.com */
  email?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Quiz System Api
 * @version 1.0.0
 * @baseUrl http://localhost:8000
 *
 * Project made for Internet Application classes.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  login = {
    /**
     * @description Endpoint to sign in a specific user
     *
     * @tags Auth
     * @name LoginCreate
     * @request POST:/login
     */
    loginCreate: (obj: LoginRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/login`,
        method: "POST",
        body: obj,
        ...params,
      }),
  };
  register = {
    /**
     * @description Endpoint to register user
     *
     * @tags Auth
     * @name RegisterCreate
     * @request POST:/register
     */
    registerCreate: (obj: RegisterRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/register`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
        ...params,
      }),
  };
  refresh = {
    /**
     * @description Get new token using refresh token.
     *
     * @tags Auth
     * @name RefreshList
     * @request GET:/refresh
     * @secure
     */
    refreshList: (params: RequestParams = {}) =>
      this.request<RefreshTokenResponse, any>({
        path: `/refresh`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  resetStart = {
    /**
     * @description Endpoint to start reset password procedure
     *
     * @tags Auth
     * @name ResetStartCreate
     * @request POST:/reset-start
     */
    resetStartCreate: (obj: ResetStartRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/reset-start`,
        method: "POST",
        body: obj,
        ...params,
      }),
  };
  reset = {
    /**
     * @description Endpoint to start reset password procedure
     *
     * @tags Auth
     * @name ResetList
     * @request GET:/reset
     */
    resetList: (obj: ResetStartRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/reset`,
        method: "GET",
        body: obj,
        ...params,
      }),
  };
  sendMessage = {
    /**
     * No description
     *
     * @name SendMessageCreate
     * @request POST:/send-message
     */
    sendMessageCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/send-message`,
        method: "POST",
        ...params,
      }),
  };
  loginGoogle = {
    /**
     * @description Endpoint to sign in a specific user
     *
     * @tags Auth
     * @name LoginGoogleCreate
     * @request POST:/login-google
     */
    loginGoogleCreate: (obj: LoginRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/login-google`,
        method: "POST",
        body: obj,
        ...params,
      }),
  };
  registerGoogle = {
    /**
     * @description Endpoint to sign up a specific user using Google
     *
     * @tags Auth
     * @name RegisterGoogleCreate
     * @request POST:/register-google
     */
    registerGoogleCreate: (obj: RegisterGoogleRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/register-google`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
        ...params,
      }),
  };
  profile = {
    /**
     * @description Get user profile from token
     *
     * @tags Auth
     * @name ProfileCreate
     * @request POST:/profile
     * @secure
     */
    profileCreate: (params: RequestParams = {}) =>
      this.request<ProfileResponse, any>({
        path: `/profile`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
}
