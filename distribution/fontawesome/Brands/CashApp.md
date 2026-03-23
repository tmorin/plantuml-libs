# CashApp


```text
fontawesome/Brands/CashApp
```

```text
include('fontawesome/Brands/CashApp')
```



| Illustration | CashApp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CashApp.png) | ![illustration for CashApp](../../fontawesome/Brands/CashApp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CashAppXs>`
- `<$CashAppSm>`
- `<$CashAppMd>`
- `<$CashAppLg>`





## CashApp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CashApp
include('fontawesome/Brands/CashApp')

' renders the element
CashApp('CashApp', 'Cash App', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CashApp
include('fontawesome/Brands/CashApp')

' renders the element
CashApp('CashApp', 'Cash App', 'an optional tech label', 'an optional description')
@enduml
```

