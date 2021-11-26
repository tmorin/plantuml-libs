# DoNotDisturbOff


```text
material-4/Notification/DoNotDisturbOff
```

```text
include('material-4/Notification/DoNotDisturbOff')
```



| Illustration | DoNotDisturbOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DoNotDisturbOff.png) | ![illustration for DoNotDisturbOff](../../material-4/Notification/DoNotDisturbOff.Local.png) |




## DoNotDisturbOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DoNotDisturbOff
include('material-4/Notification/DoNotDisturbOff')

' renders the element
DoNotDisturbOff('DoNotDisturbOff', 'Do Not Disturb Off', 'an optional tech label')
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

' loads the Item which embeds the element DoNotDisturbOff
include('material-4/Notification/DoNotDisturbOff')

' renders the element
DoNotDisturbOff('DoNotDisturbOff', 'Do Not Disturb Off', 'an optional tech label')
@enduml
```

