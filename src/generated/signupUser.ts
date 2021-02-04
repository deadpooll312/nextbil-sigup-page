import { gql } from "@apollo/client";
import axios from 'axios';

export const SIGN_UP_USER_MUTATION = gql`
mutation SignUpRequest($signUpInput: SignupInput!) { signup(input: $signUpInput) { email } }
`;

axios.post('https://homework.nextbil.com/graphql', {
    operationName: 'SignUpRequest',
    query: SIGN_UP_USER_MUTATION,
    variables: {
        signUpInput: {
            email: '',
        }
    }
});
