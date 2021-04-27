# Wire Tap

```text
eip/SystemManagement/WireTap
```

```text
include('eip/SystemManagement/WireTap')
```

|icon|element|
|---|---|
|![](WireTap.png)|![](WireTap.element.png)|



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
' loads the WireTap element
include('eip/SystemManagement/WireTap')
WireTap('wire_tap', 'Wire Tap', 'an optional tech field')
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
' loads the WireTap element
include('eip/SystemManagement/WireTap')
WireTap('wire_tap', 'Wire Tap', 'an optional tech field')
@enduml
```

