# Exposure Plus1

```text
material-4.0/Image/ExposurePlus1
```

```text
include('material-4.0/Image/ExposurePlus1')
```

|icon|element|
|---|---|
|![](ExposurePlus1.png)|![](ExposurePlus1.element.png)|



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
' loads the ExposurePlus1 element
include('material-4.0/Image/ExposurePlus1')
ExposurePlus1('exposure_plus_1', 'Exposure Plus1', 'an optional tech field')
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
' loads the ExposurePlus1 element
include('material-4.0/Image/ExposurePlus1')
ExposurePlus1('exposure_plus_1', 'Exposure Plus1', 'an optional tech field')
@enduml
```

