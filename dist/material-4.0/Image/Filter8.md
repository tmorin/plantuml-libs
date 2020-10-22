# Filter8

```text
material-4.0/Image/Filter8
```

```text
include('material-4.0/Image/Filter8')
```

|icon|element|
|---|---|
|![](Filter8.png)|![](Filter8.element.png)|



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
' loads the Filter8 element
include('material-4.0/Image/Filter8')
Filter8('filter_8', 'Filter8', 'an optional tech field')
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
' loads the Filter8 element
include('material-4.0/Image/Filter8')
Filter8('filter_8', 'Filter8', 'an optional tech field')
@enduml
```

