# S7 Airlines

```text
simpleicons-4/S/S7Airlines
```

```text
include('simpleicons-4/S/S7Airlines')
```

|icon|element|
|---|---|
|![](S7Airlines.png)|![](S7Airlines.element.png)|



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
' loads the S7Airlines element
include('simpleicons-4/S/S7Airlines')
S7Airlines('s_7_airlines', 'S7 Airlines', 'an optional tech field')
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
' loads the S7Airlines element
include('simpleicons-4/S/S7Airlines')
S7Airlines('s_7_airlines', 'S7 Airlines', 'an optional tech field')
@enduml
```

