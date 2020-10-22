# Remove

```text
material-4.0/Content/Remove
```

```text
include('material-4.0/Content/Remove')
```

|icon|element|
|---|---|
|![](Remove.png)|![](Remove.element.png)|



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
' loads the Remove element
include('material-4.0/Content/Remove')
Remove('remove', 'Remove', 'an optional tech field')
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
' loads the Remove element
include('material-4.0/Content/Remove')
Remove('remove', 'Remove', 'an optional tech field')
@enduml
```

