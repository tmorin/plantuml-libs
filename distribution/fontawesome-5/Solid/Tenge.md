# Tenge


```text
fontawesome-5/Solid/Tenge
```

```text
include('fontawesome-5/Solid/Tenge')
```



| Illustration | Tenge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Tenge.png) | ![illustration for Tenge](../../fontawesome-5/Solid/Tenge.Local.png) |




## Tenge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tenge
include('fontawesome-5/Solid/Tenge')

' renders the element
Tenge('Tenge', 'Tenge', 'an optional tech label')
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

' loads the Item which embeds the element Tenge
include('fontawesome-5/Solid/Tenge')

' renders the element
Tenge('Tenge', 'Tenge', 'an optional tech label')
@enduml
```

