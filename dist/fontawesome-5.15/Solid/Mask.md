# Mask

```text
fontawesome-5.15/Solid/Mask
```

```text
include('fontawesome-5.15/Solid/Mask')
```

|icon|element|
|---|---|
|![](Mask.png)|![](Mask.element.png)|



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
' loads the Mask element
include('fontawesome-5.15/Solid/Mask')
Mask('mask', 'Mask', 'an optional tech field')
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
' loads the Mask element
include('fontawesome-5.15/Solid/Mask')
Mask('mask', 'Mask', 'an optional tech field')
@enduml
```

