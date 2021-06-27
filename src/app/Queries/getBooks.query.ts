import gql from 'graphql-tag';

export const getBooks = gql`
    query{
        books{
            id
            name
            description
            posterURL
            author{
                id
                name
            }
          }
    }
`;

export const getPendingBooks = gql`
    query{
      pendingBooks{
        id
        name
        description
        posterURL
        author{
          id
          name
        }
        readURL
      }
    }
`
