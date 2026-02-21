# AccountBalanceWallet


```text
material/Action/AccountBalanceWallet
```

```text
include('material/Action/AccountBalanceWallet')
```



| Illustration | AccountBalanceWallet |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AccountBalanceWallet.png) | ![illustration for AccountBalanceWallet](../../material/Action/AccountBalanceWallet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccountBalanceWalletXs>`
- `<$AccountBalanceWalletSm>`
- `<$AccountBalanceWalletMd>`
- `<$AccountBalanceWalletLg>`





## AccountBalanceWallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AccountBalanceWallet
include('material/Action/AccountBalanceWallet')

' renders the element
AccountBalanceWallet('AccountBalanceWallet', 'Account Balance Wallet', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AccountBalanceWallet
include('material/Action/AccountBalanceWallet')

' renders the element
AccountBalanceWallet('AccountBalanceWallet', 'Account Balance Wallet', 'an optional tech label', 'an optional description')
@enduml
```

