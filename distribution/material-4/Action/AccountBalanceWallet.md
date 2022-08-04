# AccountBalanceWallet


```text
material-4/Action/AccountBalanceWallet
```

```text
include('material-4/Action/AccountBalanceWallet')
```



| Illustration | AccountBalanceWallet |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AccountBalanceWallet.png) | ![illustration for AccountBalanceWallet](../../material-4/Action/AccountBalanceWallet.Local.png) |




## AccountBalanceWallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccountBalanceWallet
include('material-4/Action/AccountBalanceWallet')

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
include('material-4/bootstrap')

' loads the Item which embeds the element AccountBalanceWallet
include('material-4/Action/AccountBalanceWallet')

' renders the element
AccountBalanceWallet('AccountBalanceWallet', 'Account Balance Wallet', 'an optional tech label', 'an optional description')
@enduml
```

