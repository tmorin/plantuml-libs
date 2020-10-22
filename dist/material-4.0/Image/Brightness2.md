# Brightness2

```text
material-4.0/Image/Brightness2
```

```text
include('material-4.0/Image/Brightness2')
```

|icon|element|
|---|---|
|![](Brightness2.png)|![](Brightness2.element.png)|



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
' loads the Brightness2 element
include('material-4.0/Image/Brightness2')
Brightness2('brightness_2', 'Brightness2', 'an optional tech field')
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
' loads the Brightness2 element
include('material-4.0/Image/Brightness2')
Brightness2('brightness_2', 'Brightness2', 'an optional tech field')
@enduml
```

