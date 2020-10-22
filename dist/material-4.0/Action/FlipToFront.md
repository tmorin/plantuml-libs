# Flip To Front

```text
material-4.0/Action/FlipToFront
```

```text
include('material-4.0/Action/FlipToFront')
```

|icon|element|
|---|---|
|![](FlipToFront.png)|![](FlipToFront.element.png)|



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
' loads the FlipToFront element
include('material-4.0/Action/FlipToFront')
FlipToFront('flip_to_front', 'Flip To Front', 'an optional tech field')
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
' loads the FlipToFront element
include('material-4.0/Action/FlipToFront')
FlipToFront('flip_to_front', 'Flip To Front', 'an optional tech field')
@enduml
```

