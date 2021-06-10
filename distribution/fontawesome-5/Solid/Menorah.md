# Menorah


```text
fontawesome-5/Solid/Menorah
```

```text
include('fontawesome-5/Solid/Menorah')
```



| Illustration | Menorah |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Menorah.png) | ![illustration for Menorah](../../fontawesome-5/Solid/Menorah.Local.png) |




## Menorah

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Menorah
include('fontawesome-5/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label')
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

' loads the Item which embeds the element Menorah
include('fontawesome-5/Solid/Menorah')

' renders the element
Menorah('Menorah', 'Menorah', 'an optional tech label')
@enduml
```

