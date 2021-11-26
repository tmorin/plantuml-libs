# GoogleWallet


```text
fontawesome-5/Brands/GoogleWallet
```

```text
include('fontawesome-5/Brands/GoogleWallet')
```



| Illustration | GoogleWallet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/GoogleWallet.png) | ![illustration for GoogleWallet](../../fontawesome-5/Brands/GoogleWallet.Local.png) |




## GoogleWallet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GoogleWallet
include('fontawesome-5/Brands/GoogleWallet')

' renders the element
GoogleWallet('GoogleWallet', 'Google Wallet', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GoogleWallet
include('fontawesome-5/Brands/GoogleWallet')

' renders the element
GoogleWallet('GoogleWallet', 'Google Wallet', 'an optional tech label')
@enduml
```

