# Osano

```text
simpleicons-4.1/O/Osano
```

```text
include('simpleicons-4.1/O/Osano')
```

|icon|element|
|---|---|
|![](Osano.png)|![](Osano.element.png)|



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
' loads the Osano element
include('simpleicons-4.1/O/Osano')
Osano('osano', 'Osano', 'an optional tech field')
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
' loads the Osano element
include('simpleicons-4.1/O/Osano')
Osano('osano', 'Osano', 'an optional tech field')
@enduml
```

