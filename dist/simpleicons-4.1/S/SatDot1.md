# Sat Dot1

```text
simpleicons-4.1/S/SatDot1
```

```text
include('simpleicons-4.1/S/SatDot1')
```

|icon|element|
|---|---|
|![](SatDot1.png)|![](SatDot1.element.png)|



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
' loads the SatDot1 element
include('simpleicons-4.1/S/SatDot1')
SatDot1('sat_dot_1', 'Sat Dot1', 'an optional tech field')
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
' loads the SatDot1 element
include('simpleicons-4.1/S/SatDot1')
SatDot1('sat_dot_1', 'Sat Dot1', 'an optional tech field')
@enduml
```

