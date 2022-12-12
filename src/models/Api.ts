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
  /** @example 1 */
  userId?: number;
  /** @example false */
  isAdmin?: boolean;
}

export interface LoginGoogleRequest {
  /** @example token */
  tokenId?: string;
}

export interface LoginGoogleResponse {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjYxMDQzMTIsImV4cCI6MTc1MjEwNDMxMn0.H7E3TQPh8Nc0O5JWqPyMfRNHYoTPy57kc8z-2IJd0cc */
  token?: string;
  /** @example 5f3c44c9-eac1-4ffd-a112-ae5a1fe38fed */
  refreshToken?: string;
  /** @example 1 */
  userId?: number;
  /** @example true */
  isAdmin?: boolean;
}

export interface RegisterGoogleResponse {
  /** @example 4 */
  id?: number;
  /** @example kamilporeba1998@gmail.com */
  email?: string;
  /** @example  */
  password?: string;
  /** @example refreshToken */
  refreshToken?: string;
  /** @example resetToken */
  passwordResetToken?: string;
  /** @example 2022-12-12T13:27:37.797Z */
  passwordResetDate?: string;
  /** @example 105081556580525628106 */
  googleSub?: string;
  /** @example false */
  isAdmin?: boolean;
  /** @example 2022-12-12T13:27:37.797Z */
  createdAt?: string;
  /** @example 2022-12-12T13:27:37.797Z */
  updatedAt?: string;
}

export interface RegisterGoogleRequest {
  /** @example tokenId */
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
  /** @example 4 */
  id?: number;
  /** @example kamilporeba1998@gmail.com */
  email?: string;
  /** @example password */
  password?: string;
  /** @example refreshToken */
  refreshToken?: string;
  /** @example resetToken */
  passwordResetToken?: string;
  /** @example 2022-12-12T13:27:37.798Z */
  passwordResetDate?: string;
  /** @example 105081556580525628106 */
  googleSub?: string;
  /** @example false */
  isAdmin?: boolean;
  /** @example 2022-12-12T13:27:37.798Z */
  createdAt?: string;
  /** @example 2022-12-12T13:27:37.798Z */
  updatedAt?: string;
}

export interface ProfileResponse {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example 1 */
  id?: number;
}

export interface RefreshTokenResponse {
  /** @example token */
  token?: string;
}

export interface ResetStartRequest {
  /** @example kamilporeba@hotmail.com */
  email?: string;
}

export interface ResetPasswordRequest {
  /** @example kamilporeba@hotmail.com */
  email?: string;
  /** @example e31ace7a-99fd-45e1-91c7-855e02d54983 */
  resetGUID?: string;
  /** @example Kamil123! */
  password?: string;
  /** @example Kamil123! */
  passwordRepeated?: string;
}

export interface AddTrainingRequest {
  /** @example Training name */
  name?: string;
  /** @example true */
  visibility?: boolean;
  /** @example [1] */
  tagIds?: number[];
}

export interface EditTrainingRequest {
  /** @example 1 */
  trainingId?: number;
  /** @example Training name */
  name?: string;
  /** @example true */
  visibility?: boolean;
  /** @example [1] */
  tagIds?: number[];
}

export type GetAllTrainingsResponse = {
  /** @example 1 */
  id?: number;
  /** @example 2022-12-12T13:27:37.806Z */
  createdAt?: string;
  /** @example test */
  name?: string;
  /** @example 2022-12-12T13:27:37.806Z */
  updatedAt?: string;
  /** @example 1 */
  userId?: number;
  /** @example true */
  visibility?: boolean;
  /** @example true */
  likedTraining?: boolean;
  user?: {
    /** @example kamilporeba@hotmail.com */
    email?: string;
    /** @example 1 */
    id?: number;
  };
  tagTraining?: {
    /** @example 1 */
    tagId?: number;
    /** @example tagName */
    tagName?: string;
  }[];
  trainingSession?: {
    /** @example 1 */
    id?: number;
    /** @example 2022-12-12T13:27:37.806Z */
    createdAt?: string;
    /** @example false */
    finished?: boolean;
    /** @example 2022-12-12T13:27:37.806Z */
    updatedAt?: string;
  }[];
}[];

export interface GetOneTrainingResponse {
  /** @example 1 */
  id?: number;
  /** @example 2022-12-12T13:27:37.807Z */
  createdAt?: string;
  /** @example test */
  name?: string;
  /** @example 2022-12-12T13:27:37.807Z */
  updatedAt?: string;
  /** @example 1 */
  userId?: number;
  /** @example true */
  visibility?: boolean;
  /** @example true */
  likedTraining?: boolean;
  user?: {
    /** @example kamilporeba@hotmail.com */
    email?: string;
    /** @example 1 */
    id?: number;
  };
  tagTraining?: {
    /** @example 1 */
    tagId?: number;
    /** @example tagName */
    tagName?: string;
  }[];
  trainingSession?: {
    /** @example 1 */
    id?: number;
    /** @example 2022-12-12T13:27:37.807Z */
    createdAt?: string;
    /** @example false */
    finished?: boolean;
    /** @example 2022-12-12T13:27:37.807Z */
    updatedAt?: string;
  }[];
}

export interface AddQuestionRequest {
  /** @example Sample question */
  question?: string;
  /** @example 1 */
  trainingId?: number;
}

export interface AddQuestionAnswerRequest {
  /** @example 1 */
  questionId?: number;
  /** @example Sample answer */
  answer?: string;
  /** @example true */
  isCorrect?: boolean;
}

export interface AddQuestionAnswerResponse {
  /** @example answer */
  answer?: string;
  /** @example 2022-12-12T13:27:37.792Z */
  createdAt?: string;
  /** @example 1 */
  id?: number;
  /** @example true */
  isCorrect?: boolean;
  /** @example 1 */
  questionId?: number;
  /** @example 2022-12-12T13:27:37.792Z */
  updatedAt?: string;
}

export type GetQuestionsResponse = {
  /** @example 1 */
  id?: number;
  /** @example Test question */
  question?: string;
  /** @example 1 */
  trainingId?: number;
  /** @example 2022-12-12T13:27:37.802Z */
  createdAt?: string;
  /** @example 2022-12-12T13:27:37.802Z */
  updatedAt?: string;
  QuestionAnswer?: {
    /** @example 1 */
    id?: number;
    /** @example 1 */
    questionId?: number;
    /** @example sample answer */
    answer?: string;
    /** @example true */
    isCorrect?: boolean;
    /** @example 2022-12-12T13:27:37.802Z */
    createdAt?: string;
    /** @example 2022-12-12T13:27:37.802Z */
    updatedAt?: string;
  }[];
}[];

export interface GetQuestionResponse {
  /** @example 1 */
  id?: number;
  /** @example Test question */
  question?: string;
  /** @example 1 */
  trainingId?: number;
  /** @example 2022-12-12T13:27:37.801Z */
  createdAt?: string;
  /** @example 2022-12-12T13:27:37.801Z */
  updatedAt?: string;
  QuestionAnswer?: {
    /** @example 1 */
    id?: number;
    /** @example 1 */
    questionId?: number;
    /** @example sample answer */
    answer?: string;
    /** @example true */
    isCorrect?: boolean;
    /** @example 2022-12-12T13:27:37.801Z */
    createdAt?: string;
    /** @example 2022-12-12T13:27:37.801Z */
    updatedAt?: string;
  }[];
}

export interface EditQuestionRequest {
  /** @example 1 */
  questionId?: number;
  /** @example Sample question */
  question?: string;
}

export interface EditQuestionAnswerRequest {
  /** @example Sample answer */
  answer?: string;
  /** @example true */
  isCorrect?: boolean;
  /** @example 1 */
  questionAnswerId?: number;
}

export interface AddQuestionWithAnswersRequest {
  /** @example Sample question */
  question?: string;
  /** @example 1 */
  trainingId?: number;
  answers?: {
    /** @example Sample answer 2 */
    answer?: string;
    /** @example false */
    isCorrect?: boolean;
  }[];
}

export interface StartTrainingSessionRequest {
  /** @example 1 */
  trainingId?: number;
}

export interface StartTrainingSessionResponse {
  /** @example 1 */
  trainingSessionId?: number;
}

export interface EndTrainingSessionRequest {
  /** @example 1 */
  trainingId?: number;
}

export interface AddUserAnswerRequest {
  /** @example 1 */
  trainingSessionId?: number;
  /** @example 1 */
  questionId?: number;
  /** @example [1,2,3] */
  questionAnswerIds?: number[];
}

export type TagsResponse = {
  /** @example 3 */
  id?: number;
  /** @example testTag3 */
  name?: string;
  /** @example pending */
  tagStatus?: string;
}[];

export interface BlockUserRequest {
  /** @example 1 */
  userId?: number;
  /** @example 2022-12-12T13:27:37.812Z */
  blockedTo?: string;
}

export interface UnlockUserRequest {
  /** @example 1 */
  userId?: number;
}

export interface GetTrainingSessionQuestionsResponse {
  questions?: {
    /** @example [] */
    questionAnswer?: any[];
    /** @example 34 */
    id?: number;
    /** @example Sample question */
    question?: string;
    /** @example 1000000 */
    trainingId?: number;
    /** @example 2022-12-12T13:27:37.809Z */
    createdAt?: string;
    /** @example 2022-12-12T13:27:37.809Z */
    updatedAt?: string;
  }[];
  /** @example 0 */
  answeredQuestionCount?: number;
  /** @example 5 */
  totalQuestionCount?: number;
}

export type GetUserTrainingSessionsResponse = {
  /** @example 5 */
  id?: number;
  /** @example true */
  finished?: boolean;
  /** @example 1000000 */
  trainingId?: number;
  /** @example Init training 1 */
  trainingName?: string;
  trainingQuestions?: {
    /** @example 1000000 */
    trainingQuestionId?: number;
    /** @example Init question 1 */
    question?: string;
    /** @example incorrect */
    answerStatus?: string;
  }[];
  /** @example 1 */
  correctQuestionCount?: number;
  /** @example 3 */
  totalQuestionCount?: number;
}[];

export type GetUserTrainingSessionResponse = {
  /** @example 5 */
  id?: number;
  /** @example true */
  finished?: boolean;
  /** @example 1000000 */
  trainingId?: number;
  /** @example Init training 1 */
  trainingName?: string;
  trainingQuestions?: {
    /** @example 1000000 */
    trainingQuestionId?: number;
    /** @example Init question 1 */
    question?: string;
    /** @example incorrect */
    answerStatus?: string;
  }[];
  /** @example 1 */
  correctQuestionCount?: number;
  /** @example 3 */
  totalQuestionCount?: number;
}[];

export interface AddTagRequest {
  /** @example tagName */
  name?: string;
}

export interface AddTagAdminRequest {
  /** @example tagName */
  name?: string;
}

export interface RejectTagRequest {
  /** @example 1 */
  tagId?: number;
}

export type GetAllTagsForTrainingResponse = {
  /** @example 3 */
  id?: number;
  /** @example testTag3 */
  name?: string;
  /** @example pending */
  tagStatus?: string;
}[];

export interface AcceptTagRequest {
  /** @example 1 */
  tagId?: number;
}

export interface EditTagRequest {
  /** @example newTagName */
  name?: string;
  /** @example 1 */
  tagId?: number;
}

export type GetAllUsersResponse = {
  /** @example 7 */
  id?: number;
  /** @example 2022-12-12T13:27:37.812Z */
  createdAt?: string;
  /** @example 2022-12-12T13:27:37.812Z */
  updatedAt?: string;
  /** @example kamilporeba5@hotmail.com */
  email?: string;
  /** @example 2022-12-12T13:27:37.812Z */
  passwordResetDate?: string;
  /** @example true */
  isAdmin?: boolean;
  googleSub?: any;
}[];

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
  public baseUrl: string = "https://quiz-system-backend-h.herokuapp.com";
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
 * @baseUrl https://quiz-system-backend-h.herokuapp.com
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
      this.request<LoginResponse, any>({
        path: `/login`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
        ...params,
      }),
  };
  register = {
    /**
     * @description Endpoint to register user.
     *
     * @tags Auth
     * @name RegisterCreate
     * @request POST:/register
     */
    registerCreate: (obj: RegisterRequest, params: RequestParams = {}) =>
      this.request<RegisterResponse, any>({
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
        type: ContentType.Json,
        ...params,
      }),
  };
  reset = {
    /**
     * @description Endpoint to start reset password procedure.
     *
     * @tags Auth
     * @name ResetCreate
     * @request POST:/reset
     */
    resetCreate: (obj: ResetPasswordRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/reset`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
        ...params,
      }),
  };
  loginGoogle = {
    /**
     * @description Endpoint to sign in a specific user using Google
     *
     * @tags Auth
     * @name LoginGoogleCreate
     * @request POST:/login-google
     */
    loginGoogleCreate: (obj: LoginGoogleRequest, params: RequestParams = {}) =>
      this.request<LoginGoogleResponse, any>({
        path: `/login-google`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
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
      this.request<RegisterGoogleResponse, any>({
        path: `/register-google`,
        method: "POST",
        body: obj,
        type: ContentType.Json,
        ...params,
      }),
  };
  initdb = {
    /**
     * No description
     *
     * @name InitdbCreate
     * @request POST:/initdb
     */
    initdbCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/initdb`,
        method: "POST",
        ...params,
      }),
  };
  training = {
    /**
     * @description Gets all trainings of all user that have visiblity set to true, and all trainings of logged in user. Also, retrieve currently active training session.
     *
     * @tags Training
     * @name GetTraining
     * @request GET:/training/all
     * @secure
     */
    getTraining: (
      query?: {
        /** Set to true, if only liked one should be displayed */
        onlyLiked?: string;
        /** Set to search query */
        search?: string;
        /** Set tags */
        tags?: any[];
      },
      params: RequestParams = {},
    ) =>
      this.request<GetAllTrainingsResponse, any>({
        path: `/training/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Gets one training.
     *
     * @tags Training
     * @name TrainingDetail
     * @request GET:/training/{trainingId}
     * @secure
     */
    trainingDetail: (trainingId: string, params: RequestParams = {}) =>
      this.request<GetOneTrainingResponse, any>({
        path: `/training/${trainingId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Delete training.
     *
     * @tags Training
     * @name TrainingDelete
     * @request DELETE:/training/{trainingId}
     * @secure
     */
    trainingDelete: (trainingId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/training/${trainingId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create training
     *
     * @tags Training
     * @name TrainingCreate
     * @request POST:/training
     * @secure
     */
    trainingCreate: (obj: AddTrainingRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/training`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Edit training
     *
     * @tags Training
     * @name TrainingUpdate
     * @request PUT:/training
     * @secure
     */
    trainingUpdate: (obj: EditTrainingRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/training`,
        method: "PUT",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  trainingSession = {
    /**
     * @description Start training session. It makes new training session with finished status set to false. If training session with given id already exists, then response is always success - before creating new training session, it is required to use /training-session/end endpoint.
     *
     * @tags Training Session
     * @name StartCreate
     * @request POST:/training-session/start
     * @secure
     */
    startCreate: (obj: StartTrainingSessionRequest, params: RequestParams = {}) =>
      this.request<StartTrainingSessionResponse, any>({
        path: `/training-session/start`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Ends training session, setting its finished status to true.
     *
     * @tags Training Session
     * @name PostTrainingSession
     * @request POST:/training-session/end
     * @secure
     */
    postTrainingSession: (obj: EndTrainingSessionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/training-session/end`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get all questions for training session that were not answered, and were created after creation of training session. This endpoint should be used to get questions for training session that is started or continued (when previous was not finished) using endpoint /training-session/start
     *
     * @tags Training Session
     * @name QuestionsDetail
     * @request GET:/training-session/{trainingSessionId}/questions
     * @secure
     */
    questionsDetail: (trainingSessionId: string, params: RequestParams = {}) =>
      this.request<GetTrainingSessionQuestionsResponse, any>({
        path: `/training-session/${trainingSessionId}/questions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get all training sessions done or started by user - it should be used on screen where all training session history is shown - endpoint doesn
     *
     * @tags Training Session
     * @name GetTrainingSession
     * @request GET:/training-session/all
     * @secure
     */
    getTrainingSession: (params: RequestParams = {}) =>
      this.request<GetUserTrainingSessionsResponse, any>({
        path: `/training-session/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Get single training session with all the details for it
     *
     * @tags Training Session
     * @name TrainingSessionDetail
     * @request GET:/training-session/{trainingSessionId}
     * @secure
     */
    trainingSessionDetail: (trainingSessionId: string, params: RequestParams = {}) =>
      this.request<GetUserTrainingSessionResponse, any>({
        path: `/training-session/${trainingSessionId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  tag = {
    /**
     * @description Get all available tags for training.
     *
     * @tags Tags
     * @name GetTag
     * @request GET:/tag
     * @secure
     */
    getTag: (params: RequestParams = {}) =>
      this.request<TagsResponse, any>({
        path: `/tag`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Create new tag with status pending, to be accepted by admin.
     *
     * @tags Tags
     * @name PostTag
     * @request POST:/tag
     * @secure
     */
    postTag: (obj: AddTagRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tag`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get all available tags for training.
     *
     * @tags Tags
     * @name GetTag2
     * @request GET:/tag/{trainingId}
     * @originalName getTag
     * @duplicate
     * @secure
     */
    getTag2: (trainingId: string, params: RequestParams = {}) =>
      this.request<GetAllTagsForTrainingResponse, any>({
        path: `/tag/${trainingId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  question = {
    /**
     * @description Get all questions for training, when withAnswers=true then also includes answers. This endpoint should be used when browsing list of all trainings.
     *
     * @tags Question
     * @name GetQuestion
     * @request GET:/question/all/{trainingId}
     * @secure
     */
    getQuestion: (
      trainingId: string,
      query?: {
        /** Set to true when questions should include answers. */
        withAnswers?: string;
        description?: string;
        schema?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetQuestionsResponse, any>({
        path: `/question/all/${trainingId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Get one question details, with all answers.
     *
     * @tags Question
     * @name QuestionDetail
     * @request GET:/question/{questionId}
     * @secure
     */
    questionDetail: (questionId: string, params: RequestParams = {}) =>
      this.request<GetQuestionResponse, any>({
        path: `/question/${questionId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Remove question
     *
     * @tags Question
     * @name QuestionDelete
     * @request DELETE:/question/{questionId}
     * @secure
     */
    questionDelete: (questionId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question/${questionId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Create question, if user owns training, or is admin.
     *
     * @tags Question
     * @name QuestionCreate
     * @request POST:/question
     * @secure
     */
    questionCreate: (obj: AddQuestionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Edit question.
     *
     * @tags Question
     * @name QuestionUpdate
     * @request PUT:/question
     * @secure
     */
    questionUpdate: (obj: EditQuestionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question`,
        method: "PUT",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Create question with answers
     *
     * @tags Question
     * @name WithAnswersCreate
     * @request POST:/question/with-answers
     * @secure
     */
    withAnswersCreate: (obj: AddQuestionWithAnswersRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question/with-answers`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  userAnswer = {
    /**
     * @description Add answer to question. This endpoint should be used when responding to question, answers should be an array.
     *
     * @tags User Answer
     * @name UserAnswerCreate
     * @request POST:/user-answer
     * @secure
     */
    userAnswerCreate: (obj: AddUserAnswerRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user-answer`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  questionAnswer = {
    /**
     * @description Remove question answer
     *
     * @tags Answer
     * @name QuestionAnswerDelete
     * @request DELETE:/question-answer/{questionAnswerId}
     * @secure
     */
    questionAnswerDelete: (
      questionAnswerId: string,
      body: {
        /** @example any */
        questionAnswerId?: any;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/question-answer/${questionAnswerId}`,
        method: "DELETE",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Add answer for question
     *
     * @tags Answer
     * @name QuestionAnswerCreate
     * @request POST:/question-answer
     * @secure
     */
    questionAnswerCreate: (obj: AddQuestionAnswerRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question-answer`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Edit question answer.
     *
     * @tags Answer
     * @name QuestionAnswerUpdate
     * @request PUT:/question-answer
     * @secure
     */
    questionAnswerUpdate: (obj: EditQuestionAnswerRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/question-answer`,
        method: "PUT",
        body: obj,
        secure: true,
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
  admin = {
    /**
     * @description Create new tag, that is already accepted.
     *
     * @tags Admin-Tags
     * @name PostAdmin
     * @request POST:/admin/tag
     * @secure
     */
    postAdmin: (obj: AddTagAdminRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/tag`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Edit tag.
     *
     * @tags Admin-Tags
     * @name PutAdmin
     * @request PUT:/admin/tag
     * @secure
     */
    putAdmin: (obj: EditTagRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/tag`,
        method: "PUT",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Accept new tag.
     *
     * @tags Admin-Tags
     * @name TagAcceptUpdate
     * @request PUT:/admin/tag/accept
     * @secure
     */
    tagAcceptUpdate: (obj: AcceptTagRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/tag/accept`,
        method: "PUT",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Reject tag.
     *
     * @tags Admin-Tags
     * @name TagRejectUpdate
     * @request PUT:/admin/tag/reject
     * @secure
     */
    tagRejectUpdate: (obj: RejectTagRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/tag/reject`,
        method: "PUT",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get All Users.
     *
     * @tags Admin-Users
     * @name UserAllList
     * @request GET:/admin/user/all
     * @secure
     */
    userAllList: (params: RequestParams = {}) =>
      this.request<GetAllUsersResponse, any>({
        path: `/admin/user/all`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Block selected user for given time.
     *
     * @tags Admin-Users
     * @name UserBlockCreate
     * @request POST:/admin/user/block
     * @secure
     */
    userBlockCreate: (obj: BlockUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/user/block`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Unlock given user.
     *
     * @tags Admin-Users
     * @name UserUnlockCreate
     * @request POST:/admin/user/unlock
     * @secure
     */
    userUnlockCreate: (obj: UnlockUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/user/unlock`,
        method: "POST",
        body: obj,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
