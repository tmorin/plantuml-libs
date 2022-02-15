# Wallet


```text
fontawesome-6/Solid/Wallet
```

```text
include('fontawesome-6/Solid/Wallet')
```



| Illustration | Wallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Wallet.png) | ![illustration for Wallet](../../fontawesome-6/Solid/Wallet.Local.png) |




## Wallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wallet
include('fontawesome-6/Solid/Wallet')

' renders the element
Wallet('Wallet', 'Wallet', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wallet
include('fontawesome-6/Solid/Wallet')

' renders the element
Wallet('Wallet', 'Wallet', 'an optional tech label')
@enduml
```

