# Filter9 Plus

```text
material-4.0/Image/Filter9Plus
```

```text
include('material-4.0/Image/Filter9Plus')
```

|icon|element|
|---|---|
|![](Filter9Plus.png)|![](Filter9Plus.element.png)|



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
' loads the Filter9Plus element
include('material-4.0/Image/Filter9Plus')
Filter9Plus('filter_9_plus', 'Filter9 Plus', 'an optional tech field')
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
' loads the Filter9Plus element
include('material-4.0/Image/Filter9Plus')
Filter9Plus('filter_9_plus', 'Filter9 Plus', 'an optional tech field')
@enduml
```

