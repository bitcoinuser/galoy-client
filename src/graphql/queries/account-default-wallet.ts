import { gql } from "@apollo/client"

const accountDefaultWallet = gql`
  query accountDefaultWallet($username: Username!) {
    accountDefaultWallet(username: $username) {
      id
      walletCurrency
    }
  }
`
export default accountDefaultWallet
