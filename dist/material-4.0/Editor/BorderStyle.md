# Border Style

```text
material-4.0/Editor/BorderStyle
```

```text
include('material-4.0/Editor/BorderStyle')
```

|icon|element|
|---|---|
|![](BorderStyle.png)|![](BorderStyle.element.png)|



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
' loads the BorderStyle element
include('material-4.0/Editor/BorderStyle')
BorderStyle('border_style', 'Border Style', 'an optional tech field')
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
' loads the BorderStyle element
include('material-4.0/Editor/BorderStyle')
BorderStyle('border_style', 'Border Style', 'an optional tech field')
@enduml
```

