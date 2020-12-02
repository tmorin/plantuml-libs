# Heart Broken

```text
fontawesome-5.15/Solid/HeartBroken
```

```text
include('fontawesome-5.15/Solid/HeartBroken')
```

|icon|element|
|---|---|
|![](HeartBroken.png)|![](HeartBroken.element.png)|



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
' loads the HeartBroken element
include('fontawesome-5.15/Solid/HeartBroken')
HeartBroken('heart_broken', 'Heart Broken', 'an optional tech field')
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
' loads the HeartBroken element
include('fontawesome-5.15/Solid/HeartBroken')
HeartBroken('heart_broken', 'Heart Broken', 'an optional tech field')
@enduml
```

