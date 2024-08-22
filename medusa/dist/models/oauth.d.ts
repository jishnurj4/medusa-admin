export declare class Oauth {
    id: string;
    display_name: string;
    application_name: string;
    install_url: string;
    uninstall_url: string;
    data: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema OAuth
 * title: "OAuth"
 * description: "An Oauth app is typically created by a plugin to handle authentication to third-party services."
 * type: object
 * required:
 *   - application_name
 *   - data
 *   - display_name
 *   - id
 *   - install_url
 *   - uninstall_url
 * properties:
 *   id:
 *     description: The app's ID
 *     type: string
 *     example: example_app
 *   display_name:
 *     description: The app's display name
 *     type: string
 *     example: Example app
 *   application_name:
 *     description: The app's name
 *     type: string
 *     example: example
 *   install_url:
 *     description: The URL to install the app
 *     nullable: true
 *     type: string
 *     format: uri
 *   uninstall_url:
 *     description: The URL to uninstall the app
 *     nullable: true
 *     type: string
 *     format: uri
 *   data:
 *     description: Any data necessary to the app.
 *     nullable: true
 *     type: object
 *     example: {}
 */
