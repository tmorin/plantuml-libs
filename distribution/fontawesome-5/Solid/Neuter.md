# Neuter


```text
fontawesome-5/Solid/Neuter
```

```text
include('fontawesome-5/Solid/Neuter')
```



| Illustration | Neuter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Neuter.png) | ![illustration for Neuter](../../fontawesome-5/Solid/Neuter.Local.png) |




## Neuter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Neuter
include('fontawesome-5/Solid/Neuter')

' renders the element
Neuter('Neuter', 'Neuter', 'an optional tech label')
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

' loads the Item which embeds the element Neuter
include('fontawesome-5/Solid/Neuter')

' renders the element
Neuter('Neuter', 'Neuter', 'an optional tech label')
@enduml
```

