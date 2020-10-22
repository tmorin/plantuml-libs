# Perm Device Information

```text
material-4.0/Action/PermDeviceInformation
```

```text
include('material-4.0/Action/PermDeviceInformation')
```

|icon|element|
|---|---|
|![](PermDeviceInformation.png)|![](PermDeviceInformation.element.png)|



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
' loads the PermDeviceInformation element
include('material-4.0/Action/PermDeviceInformation')
PermDeviceInformation('perm_device_information', 'Perm Device Information', 'an optional tech field')
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
' loads the PermDeviceInformation element
include('material-4.0/Action/PermDeviceInformation')
PermDeviceInformation('perm_device_information', 'Perm Device Information', 'an optional tech field')
@enduml
```

