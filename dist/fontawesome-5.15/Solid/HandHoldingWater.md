# Hand Holding Water

```text
fontawesome-5.15/Solid/HandHoldingWater
```

```text
include('fontawesome-5.15/Solid/HandHoldingWater')
```

|icon|element|
|---|---|
|![](HandHoldingWater.png)|![](HandHoldingWater.element.png)|



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
' loads the HandHoldingWater element
include('fontawesome-5.15/Solid/HandHoldingWater')
HandHoldingWater('hand_holding_water', 'Hand Holding Water', 'an optional tech field')
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
' loads the HandHoldingWater element
include('fontawesome-5.15/Solid/HandHoldingWater')
HandHoldingWater('hand_holding_water', 'Hand Holding Water', 'an optional tech field')
@enduml
```

