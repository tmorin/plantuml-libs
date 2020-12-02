# Hand Middle Finger

```text
fontawesome-5.15/Solid/HandMiddleFinger
```

```text
include('fontawesome-5.15/Solid/HandMiddleFinger')
```

|icon|element|
|---|---|
|![](HandMiddleFinger.png)|![](HandMiddleFinger.element.png)|



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
' loads the HandMiddleFinger element
include('fontawesome-5.15/Solid/HandMiddleFinger')
HandMiddleFinger('hand_middle_finger', 'Hand Middle Finger', 'an optional tech field')
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
' loads the HandMiddleFinger element
include('fontawesome-5.15/Solid/HandMiddleFinger')
HandMiddleFinger('hand_middle_finger', 'Hand Middle Finger', 'an optional tech field')
@enduml
```

