# Crop169

```text
material-4.0/Image/Crop169
```

```text
include('material-4.0/Image/Crop169')
```

|icon|element|
|---|---|
|![](Crop169.png)|![](Crop169.element.png)|



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
' loads the Crop169 element
include('material-4.0/Image/Crop169')
Crop169('crop_169', 'Crop169', 'an optional tech field')
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
' loads the Crop169 element
include('material-4.0/Image/Crop169')
Crop169('crop_169', 'Crop169', 'an optional tech field')
@enduml
```

