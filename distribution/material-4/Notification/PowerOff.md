# PowerOff


```text
material-4/Notification/PowerOff
```

```text
include('material-4/Notification/PowerOff')
```



| Illustration | PowerOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PowerOff.png) | ![illustration for PowerOff](../../material-4/Notification/PowerOff.Local.png) |




## PowerOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PowerOff
include('material-4/Notification/PowerOff')

' renders the element
PowerOff('PowerOff', 'Power Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PowerOff
include('material-4/Notification/PowerOff')

' renders the element
PowerOff('PowerOff', 'Power Off', 'an optional tech label', 'an optional description')
@enduml
```

