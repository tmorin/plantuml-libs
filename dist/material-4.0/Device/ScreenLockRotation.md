# Screen Lock Rotation

```text
material-4.0/Device/ScreenLockRotation
```

```text
include('material-4.0/Device/ScreenLockRotation')
```

|icon|element|
|---|---|
|![](ScreenLockRotation.png)|![](ScreenLockRotation.element.png)|



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
' loads the ScreenLockRotation element
include('material-4.0/Device/ScreenLockRotation')
ScreenLockRotation('screen_lock_rotation', 'Screen Lock Rotation', 'an optional tech field')
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
' loads the ScreenLockRotation element
include('material-4.0/Device/ScreenLockRotation')
ScreenLockRotation('screen_lock_rotation', 'Screen Lock Rotation', 'an optional tech field')
@enduml
```

