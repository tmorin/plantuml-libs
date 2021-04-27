# Control Bus

```text
eip/SystemManagement/ControlBus
```

```text
include('eip/SystemManagement/ControlBus')
```

|icon|element|
|---|---|
|![](ControlBus.png)|![](ControlBus.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the ControlBus element
include('eip/SystemManagement/ControlBus')
ControlBus('control_bus', 'Control Bus', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the ControlBus element
include('eip/SystemManagement/ControlBus')
ControlBus('control_bus', 'Control Bus', 'an optional tech field')
@enduml
```

