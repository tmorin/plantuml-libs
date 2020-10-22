# Forward30

```text
material-4.0/Av/Forward30
```

```text
include('material-4.0/Av/Forward30')
```

|icon|element|
|---|---|
|![](Forward30.png)|![](Forward30.element.png)|



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
' loads the Forward30 element
include('material-4.0/Av/Forward30')
Forward30('forward_30', 'Forward30', 'an optional tech field')
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
' loads the Forward30 element
include('material-4.0/Av/Forward30')
Forward30('forward_30', 'Forward30', 'an optional tech field')
@enduml
```

