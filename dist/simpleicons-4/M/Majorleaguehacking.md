# Majorleaguehacking

```text
simpleicons-4/M/Majorleaguehacking
```

```text
include('simpleicons-4/M/Majorleaguehacking')
```

|icon|element|
|---|---|
|![](Majorleaguehacking.png)|![](Majorleaguehacking.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Majorleaguehacking element
include('simpleicons-4/M/Majorleaguehacking')
Majorleaguehacking('majorleaguehacking', 'Majorleaguehacking', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Majorleaguehacking element
include('simpleicons-4/M/Majorleaguehacking')
Majorleaguehacking('majorleaguehacking', 'Majorleaguehacking', 'an optional tech field')
@enduml
```

