# Ipfs

```text
simpleicons-4/I/Ipfs
```

```text
include('simpleicons-4/I/Ipfs')
```

|icon|element|
|---|---|
|![](Ipfs.png)|![](Ipfs.element.png)|



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
' loads the Ipfs element
include('simpleicons-4/I/Ipfs')
Ipfs('ipfs', 'Ipfs', 'an optional tech field')
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
' loads the Ipfs element
include('simpleicons-4/I/Ipfs')
Ipfs('ipfs', 'Ipfs', 'an optional tech field')
@enduml
```

