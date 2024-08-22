"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlSchemaToFields = void 0;
const graphql_1 = require("graphql");
/**
 * From graphql schema get all the fields for the requested type and relations
 *
 * @param schemaTypeMap
 * @param typeName
 * @param relations
 *
 * @example
 *
 * const userModule = `
 * type User {
 *   id: ID!
 *   name: String!
 *   blabla: WHATEVER
 * }
 *
 * type Post {
 *   author: User!
 * }
 * `
 *
 * const postModule = `
 * type Post {
 *   id: ID!
 *   title: String!
 *   date: String
 * }
 *
 * type User {
 *   posts: [Post!]!
 * }
 *
 * type WHATEVER {
 *   random_field: String
 *   post: Post
 * }
 * `
 *
 * const mergedSchema = mergeTypeDefs([userModule, postModule])
 * const schema = makeExecutableSchema({
 *   typeDefs: mergedSchema,
 * })
 *
 * const fields = graphqlSchemaToFields(types, "User", ["posts"])
 *
 * console.log(fields)
 *
 * // [
 * //   "id",
 * //   "name",
 * //   "posts.id",
 * //   "posts.title",
 * //   "posts.date",
 * // ]
 */
function graphqlSchemaToFields(schemaTypeMap, typeName, relations = []) {
    const result = [];
    function traverseFields(typeName, parent = "") {
        const type = schemaTypeMap[typeName];
        if (!(type instanceof graphql_1.GraphQLObjectType)) {
            return;
        }
        const fields = type.getFields();
        for (const fieldName in fields) {
            const field = fields[fieldName];
            let fieldType = field.type;
            while (fieldType.ofType) {
                fieldType = fieldType.ofType;
            }
            const composedField = parent ? `${parent}.${fieldName}` : fieldName;
            if (!(0, graphql_1.isObjectType)(fieldType)) {
                result.push(composedField);
            }
            else if (relations.includes(composedField)) {
                traverseFields(fieldType.name, composedField);
            }
        }
    }
    traverseFields(typeName);
    return result;
}
exports.graphqlSchemaToFields = graphqlSchemaToFields;
//# sourceMappingURL=graphql-schema-to-fields.js.map