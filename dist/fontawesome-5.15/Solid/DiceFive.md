# Dice Five

```text
fontawesome-5.15/Solid/DiceFive
```

```text
include('fontawesome-5.15/Solid/DiceFive')
```

|icon|element|
|---|---|
|![](DiceFive.png)|![](DiceFive.element.png)|



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
' loads the DiceFive element
include('fontawesome-5.15/Solid/DiceFive')
DiceFive('dice_five', 'Dice Five', 'an optional tech field')
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
' loads the DiceFive element
include('fontawesome-5.15/Solid/DiceFive')
DiceFive('dice_five', 'Dice Five', 'an optional tech field')
@enduml
```

