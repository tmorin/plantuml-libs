# GoogleWallet


```text
fontawesome-6/Brands/GoogleWallet
```

```text
include('fontawesome-6/Brands/GoogleWallet')
```



| Illustration | GoogleWallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GoogleWallet.png) | ![illustration for GoogleWallet](../../fontawesome-6/Brands/GoogleWallet.Local.png) |




## GoogleWallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GoogleWallet
include('fontawesome-6/Brands/GoogleWallet')

' renders the element
GoogleWallet('GoogleWallet', 'Google Wallet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GoogleWallet
include('fontawesome-6/Brands/GoogleWallet')

' renders the element
GoogleWallet('GoogleWallet', 'Google Wallet', 'an optional tech label', 'an optional description')
@enduml
```

