# Libuv

```text
simpleicons-4.1/L/Libuv
```

```text
include('simpleicons-4.1/L/Libuv')
```

|icon|element|
|---|---|
|![](Libuv.png)|![](Libuv.element.png)|



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
' loads the Libuv element
include('simpleicons-4.1/L/Libuv')
Libuv('libuv', 'Libuv', 'an optional tech field')
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
' loads the Libuv element
include('simpleicons-4.1/L/Libuv')
Libuv('libuv', 'Libuv', 'an optional tech field')
@enduml
```

