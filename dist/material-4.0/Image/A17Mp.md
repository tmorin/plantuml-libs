# A17 Mp

```text
material-4.0/Image/A17Mp
```

```text
include('material-4.0/Image/A17Mp')
```

|icon|element|
|---|---|
|![](A17Mp.png)|![](A17Mp.element.png)|



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
' loads the A17Mp element
include('material-4.0/Image/A17Mp')
A17Mp('a_17_mp', 'A17 Mp', 'an optional tech field')
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
' loads the A17Mp element
include('material-4.0/Image/A17Mp')
A17Mp('a_17_mp', 'A17 Mp', 'an optional tech field')
@enduml
```

