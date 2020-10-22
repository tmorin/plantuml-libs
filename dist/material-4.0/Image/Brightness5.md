# Brightness5

```text
material-4.0/Image/Brightness5
```

```text
include('material-4.0/Image/Brightness5')
```

|icon|element|
|---|---|
|![](Brightness5.png)|![](Brightness5.element.png)|



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
' loads the Brightness5 element
include('material-4.0/Image/Brightness5')
Brightness5('brightness_5', 'Brightness5', 'an optional tech field')
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
' loads the Brightness5 element
include('material-4.0/Image/Brightness5')
Brightness5('brightness_5', 'Brightness5', 'an optional tech field')
@enduml
```

