/**
 * @oas [post] /admin/apps/authorizations
 * operationId: "PostApps"
 * summary: "Generate Token for App"
 * description: "Use an app's Oauth provider to generate and store a new token for authentication."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostAppsReq"
 * x-codegen:
 *   method: authorize
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/apps/authorizations' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "application_name": "example",
 *           "state": "ready",
 *           "code": "token"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Apps Oauth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminAppsRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostAppsReq
 * type: object
 * required:
 *   - application_name
 *   - state
 *   - code
 * properties:
 *   application_name:
 *     type: string
 *     description: Name of the application for to generate the token for.
 *   state:
 *     type: string
 *     description: State of the application.
 *   code:
 *     type: string
 *     description: The code for the generated token.
 */
export declare class AdminPostAppsReq {
    application_name: string;
    state: string;
    code: string;
}
