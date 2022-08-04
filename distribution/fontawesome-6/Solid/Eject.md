# Eject


```text
fontawesome-6/Solid/Eject
```

```text
include('fontawesome-6/Solid/Eject')
```



| Illustration | Eject |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Eject.png) | ![illustration for Eject](../../fontawesome-6/Solid/Eject.Local.png) |




## Eject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Eject
include('fontawesome-6/Solid/Eject')

' renders the element
Eject('Eject', 'Eject', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eject
include('fontawesome-6/Solid/Eject')

' renders the element
Eject('Eject', 'Eject', 'an optional tech label', 'an optional description')
@enduml
```

