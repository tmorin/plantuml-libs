# A3 D Rotation

```text
material-4.0/Action/A3DRotation
```

```text
include('material-4.0/Action/A3DRotation')
```

|icon|element|
|---|---|
|![](A3DRotation.png)|![](A3DRotation.element.png)|



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
' loads the A3DRotation element
include('material-4.0/Action/A3DRotation')
A3DRotation('a_3_d_rotation', 'A3 D Rotation', 'an optional tech field')
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
' loads the A3DRotation element
include('material-4.0/Action/A3DRotation')
A3DRotation('a_3_d_rotation', 'A3 D Rotation', 'an optional tech field')
@enduml
```

