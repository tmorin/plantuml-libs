# Fact Check

```text
material-4.0/Action/FactCheck
```

```text
include('material-4.0/Action/FactCheck')
```

|icon|element|
|---|---|
|![](FactCheck.png)|![](FactCheck.element.png)|



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
' loads the FactCheck element
include('material-4.0/Action/FactCheck')
FactCheck('fact_check', 'Fact Check', 'an optional tech field')
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
' loads the FactCheck element
include('material-4.0/Action/FactCheck')
FactCheck('fact_check', 'Fact Check', 'an optional tech field')
@enduml
```

