# PersonRunning


```text
fontawesome/Solid/PersonRunning
```

```text
include('fontawesome/Solid/PersonRunning')
```



| Illustration | PersonRunning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonRunning.png) | ![illustration for PersonRunning](../../fontawesome/Solid/PersonRunning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonRunningXs>`
- `<$PersonRunningSm>`
- `<$PersonRunningMd>`
- `<$PersonRunningLg>`





## PersonRunning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonRunning
include('fontawesome/Solid/PersonRunning')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonRunning
include('fontawesome/Solid/PersonRunning')

' renders the element
PersonRunning('PersonRunning', 'Person Running', 'an optional tech label', 'an optional description')
@enduml
```

