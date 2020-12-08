# Socket Dot Io

```text
simpleicons-4.1/S/SocketDotIo
```

```text
include('simpleicons-4.1/S/SocketDotIo')
```

|icon|element|
|---|---|
|![](SocketDotIo.png)|![](SocketDotIo.element.png)|



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
' loads the SocketDotIo element
include('simpleicons-4.1/S/SocketDotIo')
SocketDotIo('socket_dot_io', 'Socket Dot Io', 'an optional tech field')
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
' loads the SocketDotIo element
include('simpleicons-4.1/S/SocketDotIo')
SocketDotIo('socket_dot_io', 'Socket Dot Io', 'an optional tech field')
@enduml
```

