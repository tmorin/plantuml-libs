# Whmcs


```text
fontawesome-5/Brands/Whmcs
```

```text
include('fontawesome-5/Brands/Whmcs')
```



| Illustration | Whmcs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Whmcs.png) | ![illustration for Whmcs](../../fontawesome-5/Brands/Whmcs.Local.png) |




## Whmcs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Whmcs
include('fontawesome-5/Brands/Whmcs')

' renders the element
Whmcs('Whmcs', 'Whmcs', 'an optional tech label')
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

' loads the Item which embeds the element Whmcs
include('fontawesome-5/Brands/Whmcs')

' renders the element
Whmcs('Whmcs', 'Whmcs', 'an optional tech label')
@enduml
```

