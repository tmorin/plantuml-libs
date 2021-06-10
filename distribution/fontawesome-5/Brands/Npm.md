# Npm


```text
fontawesome-5/Brands/Npm
```

```text
include('fontawesome-5/Brands/Npm')
```



| Illustration | Npm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Npm.png) | ![illustration for Npm](../../fontawesome-5/Brands/Npm.Local.png) |




## Npm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Npm
include('fontawesome-5/Brands/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label')
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

' loads the Item which embeds the element Npm
include('fontawesome-5/Brands/Npm')

' renders the element
Npm('Npm', 'Npm', 'an optional tech label')
@enduml
```

