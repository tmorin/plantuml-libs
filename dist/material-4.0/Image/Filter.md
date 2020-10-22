# Filter

```text
material-4.0/Image/Filter
```

```text
include('material-4.0/Image/Filter')
```

|icon|element|
|---|---|
|![](Filter.png)|![](Filter.element.png)|



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
' loads the Filter element
include('material-4.0/Image/Filter')
Filter('filter', 'Filter', 'an optional tech field')
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
' loads the Filter element
include('material-4.0/Image/Filter')
Filter('filter', 'Filter', 'an optional tech field')
@enduml
```

