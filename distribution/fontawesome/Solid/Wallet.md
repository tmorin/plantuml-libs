# Wallet


```text
fontawesome/Solid/Wallet
```

```text
include('fontawesome/Solid/Wallet')
```



| Illustration | Wallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Wallet.png) | ![illustration for Wallet](../../fontawesome/Solid/Wallet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WalletXs>`
- `<$WalletSm>`
- `<$WalletMd>`
- `<$WalletLg>`





## Wallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wallet
include('fontawesome/Solid/Wallet')

' renders the element
Wallet('Wallet', 'Wallet', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wallet
include('fontawesome/Solid/Wallet')

' renders the element
Wallet('Wallet', 'Wallet', 'an optional tech label', 'an optional description')
@enduml
```

