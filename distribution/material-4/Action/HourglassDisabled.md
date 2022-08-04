# HourglassDisabled


```text
material-4/Action/HourglassDisabled
```

```text
include('material-4/Action/HourglassDisabled')
```



| Illustration | HourglassDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/HourglassDisabled.png) | ![illustration for HourglassDisabled](../../material-4/Action/HourglassDisabled.Local.png) |




## HourglassDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HourglassDisabled
include('material-4/Action/HourglassDisabled')

' renders the element
HourglassDisabled('HourglassDisabled', 'Hourglass Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassDisabled
include('material-4/Action/HourglassDisabled')

' renders the element
HourglassDisabled('HourglassDisabled', 'Hourglass Disabled', 'an optional tech label', 'an optional description')
@enduml
```

