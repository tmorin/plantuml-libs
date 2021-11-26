# Medkit


```text
fontawesome-5/Solid/Medkit
```

```text
include('fontawesome-5/Solid/Medkit')
```



| Illustration | Medkit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Medkit.png) | ![illustration for Medkit](../../fontawesome-5/Solid/Medkit.Local.png) |




## Medkit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Medkit
include('fontawesome-5/Solid/Medkit')

' renders the element
Medkit('Medkit', 'Medkit', 'an optional tech label')
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

' loads the Item which embeds the element Medkit
include('fontawesome-5/Solid/Medkit')

' renders the element
Medkit('Medkit', 'Medkit', 'an optional tech label')
@enduml
```

