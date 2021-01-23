# Microgenetics

```text
simpleicons-4/M/Microgenetics
```

```text
include('simpleicons-4/M/Microgenetics')
```

|icon|element|
|---|---|
|![](Microgenetics.png)|![](Microgenetics.element.png)|



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
' loads the Microgenetics element
include('simpleicons-4/M/Microgenetics')
Microgenetics('microgenetics', 'Microgenetics', 'an optional tech field')
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
' loads the Microgenetics element
include('simpleicons-4/M/Microgenetics')
Microgenetics('microgenetics', 'Microgenetics', 'an optional tech field')
@enduml
```

