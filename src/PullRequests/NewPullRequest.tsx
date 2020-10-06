import {gql} from "apollo-boost"
import React, {useState} from "react"
import {useApolloClient, useMutation} from "react-apollo-hooks"
import {Field} from "../Field"
import {Form, FormValues} from "../Form"
import {Panel} from "../Panel"
import {getRepository, getRepositoryVariables} from "../queries/types/getRepository"
import {GET_REPOSITORY} from "../queries/getRepository"
import {
  createNewPullRequest,
  createNewPullRequestVariables,
  createNewPullRequest_createPullRequest_pullRequest
} from "./types/createNewPullRequest"

const CREATE_PULL_REQUEST = gql`
  mutation createNewPullRequest(
    $baseRefName: String!
    $headRefName: String!
    $body: String
    $title: String!
    $repositoryId: ID!
  ) {
    createPullRequest(
      input: {
        title: $title
        body: $body
        repositoryId: $repositoryId
        baseRefName: $baseRefName
        headRefName: $headRefName
      }
    ) {
      pullRequest {
        title
        url
      }
    }
  }
`

export const NewPullRequest = () => {
  const onSubmit = async (values: FormValues) => {
    const [repo, title, body, baseRefName, headRefName] = values.textbox
    const [owner, name] = repo.split("/")
  }
  return (
    <Panel top="25%" left="center" height={12}>
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="New Pull Request"
      />
      <Form onSubmit={onSubmit}>
        {(triggerSubmit) => {
          return (
            <>
              <Field
                top={0}
                label="Repo: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={1}
                label="Title: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={2}
                label="Body: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={3}
                label="Base: "
                onSubmit={triggerSubmit}
              />
              <Field
                top={4}
                label="Head: "
                onSubmit={triggerSubmit}
              />
            </>
          )
        }}
      </Form>
    </Panel>
  )
}
