/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!, $createdAt: AWSDate!) {
    getPost(id: $id, createdAt: $createdAt) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        postId
        post {
          id
          content
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
      nextToken
      __typename
    }
  }
`;
export const commentsByPostIdAndCreatedAt = /* GraphQL */ `
  query CommentsByPostIdAndCreatedAt(
    $postId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostIdAndCreatedAt(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        postId
        post {
          id
          content
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
      nextToken
      __typename
    }
  }
`;
