import gql from 'graphql-tag';

export const loginUser = gql`
    mutation loginUser($email:String!,$password:String!){
      loginUser(email: $email, password: $password){
        name
        email
        photo
        type
          }
    }
`;
