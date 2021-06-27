import gql from 'graphql-tag';

export const updateBookStatus = gql`
    mutation updateBookStatus($bookID:ID!,$status:String!){
      updateBookStatus(id:$bookID,status:$status){
            name
          }
    }
`;
