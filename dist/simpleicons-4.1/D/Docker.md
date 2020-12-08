# Docker

```text
simpleicons-4.1/D/Docker
```

```text
include('simpleicons-4.1/D/Docker')
```

|icon|element|
|---|---|
|![](Docker.png)|![](Docker.element.png)|



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
' loads the Docker element
include('simpleicons-4.1/D/Docker')
Docker('docker', 'Docker', 'an optional tech field')
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
' loads the Docker element
include('simpleicons-4.1/D/Docker')
Docker('docker', 'Docker', 'an optional tech field')
@enduml
```

