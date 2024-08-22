import { Note } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminNotesRes
 * type: object
 * description: "The note's details."
 * required:
 *   - note
 * properties:
 *   note:
 *     description: Note details.
 *     $ref: "#/components/schemas/Note"
 */
export type AdminNotesRes = {
    note: Note;
};
/**
 * @schema AdminNotesDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Note.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: note
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Note was deleted.
 *     default: true
 */
export type AdminNotesDeleteRes = DeleteResponse;
/**
 * @schema AdminNotesListRes
 * type: object
 * description: "The list of notes with pagination fields."
 * required:
 *   - notes
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   notes:
 *     type: array
 *     description: An array of notes
 *     items:
 *       $ref: "#/components/schemas/Note"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of notes skipped when retrieving the notes.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminNotesListRes = PaginatedResponse & {
    notes: Note[];
};
export * from "./create-note";
export * from "./delete-note";
export * from "./get-note";
export * from "./list-notes";
export * from "./update-note";
