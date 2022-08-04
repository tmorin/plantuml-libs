# Menorah


```text
fontawesome-6/Solid/Menorah
```

```text
include('fontawesome-6/Solid/Menorah')
```



| Illustration | Menorah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Menorah.png) | ![illustration for Menorah](../../fontawesome-6/Solid/Menorah.Local.png) |




## Menorah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Menorah
include('fontawesome-6/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Menorah
include('fontawesome-6/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label', 'an optional description')
@enduml
```

