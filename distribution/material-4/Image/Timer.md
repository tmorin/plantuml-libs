# Timer


```text
material-4/Image/Timer
```

```text
include('material-4/Image/Timer')
```



| Illustration | Timer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Timer.png) | ![illustration for Timer](../../material-4/Image/Timer.Local.png) |




## Timer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Timer
include('material-4/Image/Timer')

' renders the element
Timer('Timer', 'Timer', 'an optional tech label')
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

' loads the Item which embeds the element Timer
include('material-4/Image/Timer')

' renders the element
Timer('Timer', 'Timer', 'an optional tech label')
@enduml
```

