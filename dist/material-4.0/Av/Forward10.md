# Forward10

```text
material-4.0/Av/Forward10
```

```text
include('material-4.0/Av/Forward10')
```

|icon|element|
|---|---|
|![](Forward10.png)|![](Forward10.element.png)|



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
' loads the Forward10 element
include('material-4.0/Av/Forward10')
Forward10('forward_10', 'Forward10', 'an optional tech field')
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
' loads the Forward10 element
include('material-4.0/Av/Forward10')
Forward10('forward_10', 'Forward10', 'an optional tech field')
@enduml
```

