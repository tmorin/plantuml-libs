# Divide

```text
fontawesome-5.15/Solid/Divide
```

```text
include('fontawesome-5.15/Solid/Divide')
```

|icon|element|
|---|---|
|![](Divide.png)|![](Divide.element.png)|



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
' loads the Divide element
include('fontawesome-5.15/Solid/Divide')
Divide('divide', 'Divide', 'an optional tech field')
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
' loads the Divide element
include('fontawesome-5.15/Solid/Divide')
Divide('divide', 'Divide', 'an optional tech field')
@enduml
```

