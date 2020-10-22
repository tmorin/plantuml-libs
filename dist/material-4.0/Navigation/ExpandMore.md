# Expand More

```text
material-4.0/Navigation/ExpandMore
```

```text
include('material-4.0/Navigation/ExpandMore')
```

|icon|element|
|---|---|
|![](ExpandMore.png)|![](ExpandMore.element.png)|



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
' loads the ExpandMore element
include('material-4.0/Navigation/ExpandMore')
ExpandMore('expand_more', 'Expand More', 'an optional tech field')
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
' loads the ExpandMore element
include('material-4.0/Navigation/ExpandMore')
ExpandMore('expand_more', 'Expand More', 'an optional tech field')
@enduml
```

