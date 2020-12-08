# Dynamics365

```text
simpleicons-4.1/D/Dynamics365
```

```text
include('simpleicons-4.1/D/Dynamics365')
```

|icon|element|
|---|---|
|![](Dynamics365.png)|![](Dynamics365.element.png)|



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
' loads the Dynamics365 element
include('simpleicons-4.1/D/Dynamics365')
Dynamics365('dynamics_365', 'Dynamics365', 'an optional tech field')
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
' loads the Dynamics365 element
include('simpleicons-4.1/D/Dynamics365')
Dynamics365('dynamics_365', 'Dynamics365', 'an optional tech field')
@enduml
```

