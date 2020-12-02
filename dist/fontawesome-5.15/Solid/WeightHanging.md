# Weight Hanging

```text
fontawesome-5.15/Solid/WeightHanging
```

```text
include('fontawesome-5.15/Solid/WeightHanging')
```

|icon|element|
|---|---|
|![](WeightHanging.png)|![](WeightHanging.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the WeightHanging element
include('fontawesome-5.15/Solid/WeightHanging')
WeightHanging('weight_hanging', 'Weight Hanging', 'an optional tech field')
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
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the WeightHanging element
include('fontawesome-5.15/Solid/WeightHanging')
WeightHanging('weight_hanging', 'Weight Hanging', 'an optional tech field')
@enduml
```

