# A5 Mp

```text
material-4.0/Image/A5Mp
```

```text
include('material-4.0/Image/A5Mp')
```

|icon|element|
|---|---|
|![](A5Mp.png)|![](A5Mp.element.png)|



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
' loads the A5Mp element
include('material-4.0/Image/A5Mp')
A5Mp('a_5_mp', 'A5 Mp', 'an optional tech field')
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
' loads the A5Mp element
include('material-4.0/Image/A5Mp')
A5Mp('a_5_mp', 'A5 Mp', 'an optional tech field')
@enduml
```

