# Brightness3

```text
material-4.0/Image/Brightness3
```

```text
include('material-4.0/Image/Brightness3')
```

|icon|element|
|---|---|
|![](Brightness3.png)|![](Brightness3.element.png)|



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
' loads the Brightness3 element
include('material-4.0/Image/Brightness3')
Brightness3('brightness_3', 'Brightness3', 'an optional tech field')
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
' loads the Brightness3 element
include('material-4.0/Image/Brightness3')
Brightness3('brightness_3', 'Brightness3', 'an optional tech field')
@enduml
```

