# Openbsd

```text
simpleicons-4.1/O/Openbsd
```

```text
include('simpleicons-4.1/O/Openbsd')
```

|icon|element|
|---|---|
|![](Openbsd.png)|![](Openbsd.element.png)|



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
' loads the Openbsd element
include('simpleicons-4.1/O/Openbsd')
Openbsd('openbsd', 'Openbsd', 'an optional tech field')
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
' loads the Openbsd element
include('simpleicons-4.1/O/Openbsd')
Openbsd('openbsd', 'Openbsd', 'an optional tech field')
@enduml
```

