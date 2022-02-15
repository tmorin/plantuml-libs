# Cpanel


```text
fontawesome-6/Brands/Cpanel
```

```text
include('fontawesome-6/Brands/Cpanel')
```



| Illustration | Cpanel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Cpanel.png) | ![illustration for Cpanel](../../fontawesome-6/Brands/Cpanel.Local.png) |




## Cpanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cpanel
include('fontawesome-6/Brands/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label')
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

' loads the Item which embeds the element Cpanel
include('fontawesome-6/Brands/Cpanel')

' renders the element
Cpanel('Cpanel', 'Cpanel', 'an optional tech label')
@enduml
```

