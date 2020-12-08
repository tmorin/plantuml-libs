# Hackster

```text
simpleicons-4.1/H/Hackster
```

```text
include('simpleicons-4.1/H/Hackster')
```

|icon|element|
|---|---|
|![](Hackster.png)|![](Hackster.element.png)|



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
' loads the Hackster element
include('simpleicons-4.1/H/Hackster')
Hackster('hackster', 'Hackster', 'an optional tech field')
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
' loads the Hackster element
include('simpleicons-4.1/H/Hackster')
Hackster('hackster', 'Hackster', 'an optional tech field')
@enduml
```

