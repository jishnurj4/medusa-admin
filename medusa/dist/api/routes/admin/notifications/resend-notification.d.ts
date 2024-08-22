/**
 * @oas [post] /admin/notifications/{id}/resend
 * operationId: "PostNotificationsNotificationResend"
 * summary: "Resend Notification"
 * description: "Resend a previously sent notifications, with the same data but optionally to a different address."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Notification
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostNotificationsNotificationResendReq"
 * x-codegen:
 *   method: resend
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notifications.resend(notificationId)
 *       .then(({ notification }) => {
 *         console.log(notification.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminResendNotification } from "medusa-react"
 *
 *       type Props = {
 *         notificationId: string
 *       }
 *
 *       const Notification = ({ notificationId }: Props) => {
 *         const resendNotification = useAdminResendNotification(
 *           notificationId
 *         )
 *         // ...
 *
 *         const handleResend = () => {
 *           resendNotification.mutate({}, {
 *             onSuccess: ({ notification }) => {
 *               console.log(notification.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Notification
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/notifications/{id}/resend' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Notifications
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminNotificationsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema AdminPostNotificationsNotificationResendReq
 * type: object
 * description: "The resend details."
 * properties:
 *   to:
 *     description: >-
 *       A new address or user identifier that the Notification should be sent to. If not provided, the previous `to` field of the notification will be used.
 *     type: string
 */
export declare class AdminPostNotificationsNotificationResendReq {
    to?: string;
}
