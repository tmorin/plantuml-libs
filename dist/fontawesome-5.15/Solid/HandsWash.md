# Hands Wash

```text
fontawesome-5.15/Solid/HandsWash
```

```text
include('fontawesome-5.15/Solid/HandsWash')
```

|icon|element|
|---|---|
|![](HandsWash.png)|![](HandsWash.element.png)|



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
' loads the HandsWash element
include('fontawesome-5.15/Solid/HandsWash')
HandsWash('hands_wash', 'Hands Wash', 'an optional tech field')
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
' loads the HandsWash element
include('fontawesome-5.15/Solid/HandsWash')
HandsWash('hands_wash', 'Hands Wash', 'an optional tech field')
@enduml
```

