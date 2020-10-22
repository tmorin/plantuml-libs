# Fiber Smart Record

```text
material-4.0/Av/FiberSmartRecord
```

```text
include('material-4.0/Av/FiberSmartRecord')
```

|icon|element|
|---|---|
|![](FiberSmartRecord.png)|![](FiberSmartRecord.element.png)|



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
' loads the FiberSmartRecord element
include('material-4.0/Av/FiberSmartRecord')
FiberSmartRecord('fiber_smart_record', 'Fiber Smart Record', 'an optional tech field')
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
' loads the FiberSmartRecord element
include('material-4.0/Av/FiberSmartRecord')
FiberSmartRecord('fiber_smart_record', 'Fiber Smart Record', 'an optional tech field')
@enduml
```

