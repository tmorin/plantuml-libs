# Fiber Pin

```text
material-4.0/Av/FiberPin
```

```text
include('material-4.0/Av/FiberPin')
```

|icon|element|
|---|---|
|![](FiberPin.png)|![](FiberPin.element.png)|



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
' loads the FiberPin element
include('material-4.0/Av/FiberPin')
FiberPin('fiber_pin', 'Fiber Pin', 'an optional tech field')
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
' loads the FiberPin element
include('material-4.0/Av/FiberPin')
FiberPin('fiber_pin', 'Fiber Pin', 'an optional tech field')
@enduml
```

