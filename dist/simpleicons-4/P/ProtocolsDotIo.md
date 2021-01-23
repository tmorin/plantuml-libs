# Protocols Dot Io

```text
simpleicons-4/P/ProtocolsDotIo
```

```text
include('simpleicons-4/P/ProtocolsDotIo')
```

|icon|element|
|---|---|
|![](ProtocolsDotIo.png)|![](ProtocolsDotIo.element.png)|



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
' loads the ProtocolsDotIo element
include('simpleicons-4/P/ProtocolsDotIo')
ProtocolsDotIo('protocols_dot_io', 'Protocols Dot Io', 'an optional tech field')
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
' loads the ProtocolsDotIo element
include('simpleicons-4/P/ProtocolsDotIo')
ProtocolsDotIo('protocols_dot_io', 'Protocols Dot Io', 'an optional tech field')
@enduml
```

