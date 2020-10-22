# Brightness1

```text
material-4.0/Image/Brightness1
```

```text
include('material-4.0/Image/Brightness1')
```

|icon|element|
|---|---|
|![](Brightness1.png)|![](Brightness1.element.png)|



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
' loads the Brightness1 element
include('material-4.0/Image/Brightness1')
Brightness1('brightness_1', 'Brightness1', 'an optional tech field')
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
' loads the Brightness1 element
include('material-4.0/Image/Brightness1')
Brightness1('brightness_1', 'Brightness1', 'an optional tech field')
@enduml
```

