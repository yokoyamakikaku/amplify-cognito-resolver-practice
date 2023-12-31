/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      content
      comments {
        items {
          id
          content
          postId
          createdAt
          owner
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      content
      comments {
        items {
          id
          content
          postId
          createdAt
          owner
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      content
      comments {
        items {
          id
          content
          postId
          createdAt
          owner
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
      id
      content
      postId
      post {
        id
        content
        comments {
          nextToken
          __typename
        }
        createdAt
        owner
        updatedAt
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
      id
      content
      postId
      post {
        id
        content
        comments {
          nextToken
          __typename
        }
        createdAt
        owner
        updatedAt
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
      id
      content
      postId
      post {
        id
        content
        comments {
          nextToken
          __typename
        }
        createdAt
        owner
        updatedAt
        __typename
      }
      createdAt
      owner
      updatedAt
      __typename
    }
  }
`;
