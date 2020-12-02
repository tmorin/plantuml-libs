# Boxes

```text
fontawesome-5.15/Solid/Boxes
```

```text
include('fontawesome-5.15/Solid/Boxes')
```

|icon|element|
|---|---|
|![](Boxes.png)|![](Boxes.element.png)|



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
' loads the Boxes element
include('fontawesome-5.15/Solid/Boxes')
Boxes('boxes', 'Boxes', 'an optional tech field')
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
' loads the Boxes element
include('fontawesome-5.15/Solid/Boxes')
Boxes('boxes', 'Boxes', 'an optional tech field')
@enduml
```

