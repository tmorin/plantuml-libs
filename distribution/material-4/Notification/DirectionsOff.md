# DirectionsOff


```text
material-4/Notification/DirectionsOff
```

```text
include('material-4/Notification/DirectionsOff')
```



| Illustration | DirectionsOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/DirectionsOff.png) | ![illustration for DirectionsOff](../../material-4/Notification/DirectionsOff.Local.png) |




## DirectionsOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsOff
include('material-4/Notification/DirectionsOff')

' renders the element
DirectionsOff('DirectionsOff', 'Directions Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirectionsOff
include('material-4/Notification/DirectionsOff')

' renders the element
DirectionsOff('DirectionsOff', 'Directions Off', 'an optional tech label', 'an optional description')
@enduml
```

