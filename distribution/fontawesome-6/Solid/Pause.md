# Pause


```text
fontawesome-6/Solid/Pause
```

```text
include('fontawesome-6/Solid/Pause')
```



| Illustration | Pause |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Pause.png) | ![illustration for Pause](../../fontawesome-6/Solid/Pause.Local.png) |




## Pause

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pause
include('fontawesome-6/Solid/Pause')

' renders the element
Pause('Pause', 'Pause', 'an optional tech label')
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

' loads the Item which embeds the element Pause
include('fontawesome-6/Solid/Pause')

' renders the element
Pause('Pause', 'Pause', 'an optional tech label')
@enduml
```

