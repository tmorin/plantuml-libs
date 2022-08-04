# AccessAlarm


```text
material-4/Device/AccessAlarm
```

```text
include('material-4/Device/AccessAlarm')
```



| Illustration | AccessAlarm |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/AccessAlarm.png) | ![illustration for AccessAlarm](../../material-4/Device/AccessAlarm.Local.png) |




## AccessAlarm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccessAlarm
include('material-4/Device/AccessAlarm')

' renders the element
AccessAlarm('AccessAlarm', 'Access Alarm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AccessAlarm
include('material-4/Device/AccessAlarm')

' renders the element
AccessAlarm('AccessAlarm', 'Access Alarm', 'an optional tech label', 'an optional description')
@enduml
```

