# Dice D6

```text
fontawesome-5.15/Solid/DiceD6
```

```text
include('fontawesome-5.15/Solid/DiceD6')
```

|icon|element|
|---|---|
|![](DiceD6.png)|![](DiceD6.element.png)|



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
' loads the DiceD6 element
include('fontawesome-5.15/Solid/DiceD6')
DiceD6('dice_d_6', 'Dice D6', 'an optional tech field')
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
' loads the DiceD6 element
include('fontawesome-5.15/Solid/DiceD6')
DiceD6('dice_d_6', 'Dice D6', 'an optional tech field')
@enduml
```

