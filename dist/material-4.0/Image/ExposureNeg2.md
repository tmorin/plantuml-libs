# Exposure Neg2

```text
material-4.0/Image/ExposureNeg2
```

```text
include('material-4.0/Image/ExposureNeg2')
```

|icon|element|
|---|---|
|![](ExposureNeg2.png)|![](ExposureNeg2.element.png)|



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
' loads the ExposureNeg2 element
include('material-4.0/Image/ExposureNeg2')
ExposureNeg2('exposure_neg_2', 'Exposure Neg2', 'an optional tech field')
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
' loads the ExposureNeg2 element
include('material-4.0/Image/ExposureNeg2')
ExposureNeg2('exposure_neg_2', 'Exposure Neg2', 'an optional tech field')
@enduml
```

