# Mercedes

```text
simpleicons-4.1/M/Mercedes
```

```text
include('simpleicons-4.1/M/Mercedes')
```

|icon|element|
|---|---|
|![](Mercedes.png)|![](Mercedes.element.png)|



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
' loads the Mercedes element
include('simpleicons-4.1/M/Mercedes')
Mercedes('mercedes', 'Mercedes', 'an optional tech field')
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
' loads the Mercedes element
include('simpleicons-4.1/M/Mercedes')
Mercedes('mercedes', 'Mercedes', 'an optional tech field')
@enduml
```

