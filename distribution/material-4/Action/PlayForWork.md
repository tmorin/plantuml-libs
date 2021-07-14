# PlayForWork


```text
material-4/Action/PlayForWork
```

```text
include('material-4/Action/PlayForWork')
```



| Illustration | PlayForWork |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PlayForWork.png) | ![illustration for PlayForWork](../../material-4/Action/PlayForWork.Local.png) |




## PlayForWork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PlayForWork
include('material-4/Action/PlayForWork')

' renders the element
PlayForWork('PlayForWork', 'Play For Work', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PlayForWork
include('material-4/Action/PlayForWork')

' renders the element
PlayForWork('PlayForWork', 'Play For Work', 'an optional tech label')
@enduml
```

