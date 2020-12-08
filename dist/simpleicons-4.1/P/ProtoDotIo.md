# Proto Dot Io

```text
simpleicons-4.1/P/ProtoDotIo
```

```text
include('simpleicons-4.1/P/ProtoDotIo')
```

|icon|element|
|---|---|
|![](ProtoDotIo.png)|![](ProtoDotIo.element.png)|



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
' loads the ProtoDotIo element
include('simpleicons-4.1/P/ProtoDotIo')
ProtoDotIo('proto_dot_io', 'Proto Dot Io', 'an optional tech field')
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
' loads the ProtoDotIo element
include('simpleicons-4.1/P/ProtoDotIo')
ProtoDotIo('proto_dot_io', 'Proto Dot Io', 'an optional tech field')
@enduml
```

