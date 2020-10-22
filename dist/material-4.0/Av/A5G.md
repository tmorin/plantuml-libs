# A5 G

```text
material-4.0/Av/A5G
```

```text
include('material-4.0/Av/A5G')
```

|icon|element|
|---|---|
|![](A5G.png)|![](A5G.element.png)|



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
' loads the A5G element
include('material-4.0/Av/A5G')
A5G('a_5_g', 'A5 G', 'an optional tech field')
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
' loads the A5G element
include('material-4.0/Av/A5G')
A5G('a_5_g', 'A5 G', 'an optional tech field')
@enduml
```

