# Spacex

```text
simpleicons-4.1/S/Spacex
```

```text
include('simpleicons-4.1/S/Spacex')
```

|icon|element|
|---|---|
|![](Spacex.png)|![](Spacex.element.png)|



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
' loads the Spacex element
include('simpleicons-4.1/S/Spacex')
Spacex('spacex', 'Spacex', 'an optional tech field')
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
' loads the Spacex element
include('simpleicons-4.1/S/Spacex')
Spacex('spacex', 'Spacex', 'an optional tech field')
@enduml
```

