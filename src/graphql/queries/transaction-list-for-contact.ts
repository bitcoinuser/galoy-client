import { gql } from "@apollo/client"
import transactionListFragment from "../fragments/transaction-list-fragment"

const transactionsListForContact = gql`
  query transactionsListForContact(
    $username: Username!
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    me {
      id
      contactByUsername(username: $username) {
        transactions(first: $first, after: $after, last: $last, before: $before) {
          ...TransactionList
        }
      }
    }
  }
  ${transactionListFragment}
`

export default transactionsListForContact
