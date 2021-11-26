# TimerOff


```text
material-4/Image/TimerOff
```

```text
include('material-4/Image/TimerOff')
```



| Illustration | TimerOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/TimerOff.png) | ![illustration for TimerOff](../../material-4/Image/TimerOff.Local.png) |




## TimerOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TimerOff
include('material-4/Image/TimerOff')

' renders the element
TimerOff('TimerOff', 'Timer Off', 'an optional tech label')
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

' loads the Item which embeds the element TimerOff
include('material-4/Image/TimerOff')

' renders the element
TimerOff('TimerOff', 'Timer Off', 'an optional tech label')
@enduml
```

