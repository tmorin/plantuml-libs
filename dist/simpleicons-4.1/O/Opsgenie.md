# Opsgenie

```text
simpleicons-4.1/O/Opsgenie
```

```text
include('simpleicons-4.1/O/Opsgenie')
```

|icon|element|
|---|---|
|![](Opsgenie.png)|![](Opsgenie.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Opsgenie element
include('simpleicons-4.1/O/Opsgenie')
Opsgenie('opsgenie', 'Opsgenie', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Opsgenie element
include('simpleicons-4.1/O/Opsgenie')
Opsgenie('opsgenie', 'Opsgenie', 'an optional tech field')
@enduml
```

