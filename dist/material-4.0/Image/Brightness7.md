# Brightness7

```text
material-4.0/Image/Brightness7
```

```text
include('material-4.0/Image/Brightness7')
```

|icon|element|
|---|---|
|![](Brightness7.png)|![](Brightness7.element.png)|



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
' loads the Brightness7 element
include('material-4.0/Image/Brightness7')
Brightness7('brightness_7', 'Brightness7', 'an optional tech field')
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
' loads the Brightness7 element
include('material-4.0/Image/Brightness7')
Brightness7('brightness_7', 'Brightness7', 'an optional tech field')
@enduml
```

