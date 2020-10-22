# Straighten

```text
material-4.0/Image/Straighten
```

```text
include('material-4.0/Image/Straighten')
```

|icon|element|
|---|---|
|![](Straighten.png)|![](Straighten.element.png)|



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
' loads the Straighten element
include('material-4.0/Image/Straighten')
Straighten('straighten', 'Straighten', 'an optional tech field')
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
' loads the Straighten element
include('material-4.0/Image/Straighten')
Straighten('straighten', 'Straighten', 'an optional tech field')
@enduml
```

