# Yarn


```text
fontawesome-5/Brands/Yarn
```

```text
include('fontawesome-5/Brands/Yarn')
```



| Illustration | Yarn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Yarn.png) | ![illustration for Yarn](../../fontawesome-5/Brands/Yarn.Local.png) |




## Yarn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Yarn
include('fontawesome-5/Brands/Yarn')

' renders the element
Yarn('Yarn', 'Yarn', 'an optional tech label')
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

' loads the Item which embeds the element Yarn
include('fontawesome-5/Brands/Yarn')

' renders the element
Yarn('Yarn', 'Yarn', 'an optional tech label')
@enduml
```

