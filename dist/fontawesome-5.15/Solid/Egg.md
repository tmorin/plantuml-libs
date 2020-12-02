# Egg

```text
fontawesome-5.15/Solid/Egg
```

```text
include('fontawesome-5.15/Solid/Egg')
```

|icon|element|
|---|---|
|![](Egg.png)|![](Egg.element.png)|



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
' loads the Egg element
include('fontawesome-5.15/Solid/Egg')
Egg('egg', 'Egg', 'an optional tech field')
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
' loads the Egg element
include('fontawesome-5.15/Solid/Egg')
Egg('egg', 'Egg', 'an optional tech field')
@enduml
```

