# History Toggle Off

```text
material-4.0/Action/HistoryToggleOff
```

```text
include('material-4.0/Action/HistoryToggleOff')
```

|icon|element|
|---|---|
|![](HistoryToggleOff.png)|![](HistoryToggleOff.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the HistoryToggleOff element
include('material-4.0/Action/HistoryToggleOff')
HistoryToggleOff('history_toggle_off', 'History Toggle Off', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the HistoryToggleOff element
include('material-4.0/Action/HistoryToggleOff')
HistoryToggleOff('history_toggle_off', 'History Toggle Off', 'an optional tech field')
@enduml
```

