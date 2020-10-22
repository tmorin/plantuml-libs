# Select All

```text
material-4.0/Content/SelectAll
```

```text
include('material-4.0/Content/SelectAll')
```

|icon|element|
|---|---|
|![](SelectAll.png)|![](SelectAll.element.png)|



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
' loads the SelectAll element
include('material-4.0/Content/SelectAll')
SelectAll('select_all', 'Select All', 'an optional tech field')
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
' loads the SelectAll element
include('material-4.0/Content/SelectAll')
SelectAll('select_all', 'Select All', 'an optional tech field')
@enduml
```

