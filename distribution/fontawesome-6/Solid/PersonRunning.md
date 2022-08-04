# PersonRunning


```text
fontawesome-6/Solid/PersonRunning
```

```text
include('fontawesome-6/Solid/PersonRunning')
```



| Illustration | PersonRunning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonRunning.png) | ![illustration for PersonRunning](../../fontawesome-6/Solid/PersonRunning.Local.png) |




## PersonRunning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonRunning
include('fontawesome-6/Solid/PersonRunning')

' renders the element
PersonRunning('PersonRunning', 'Person Running', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonRunning
include('fontawesome-6/Solid/PersonRunning')

' renders the element
PersonRunning('PersonRunning', 'Person Running', 'an optional tech label', 'an optional description')
@enduml
```

