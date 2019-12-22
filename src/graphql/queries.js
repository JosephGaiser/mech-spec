/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSwitch = `query GetSwitch($id: ID!) {
  getSwitch(id: $id) {
    id
    name
    description
    type
  }
}
`;
export const listSwitchs = `query ListSwitchs(
  $filter: ModelSwitchFilterInput
  $limit: Int
  $nextToken: String
) {
  listSwitchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      type
    }
    nextToken
  }
}
`;
