/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSwitch = `mutation CreateSwitch(
  $input: CreateSwitchInput!
  $condition: ModelSwitchConditionInput
) {
  createSwitch(input: $input, condition: $condition) {
    id
    name
    description
    type
  }
}
`;
export const updateSwitch = `mutation UpdateSwitch(
  $input: UpdateSwitchInput!
  $condition: ModelSwitchConditionInput
) {
  updateSwitch(input: $input, condition: $condition) {
    id
    name
    description
    type
  }
}
`;
export const deleteSwitch = `mutation DeleteSwitch(
  $input: DeleteSwitchInput!
  $condition: ModelSwitchConditionInput
) {
  deleteSwitch(input: $input, condition: $condition) {
    id
    name
    description
    type
  }
}
`;
