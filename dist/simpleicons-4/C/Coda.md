# Coda

```text
simpleicons-4/C/Coda
```

```text
include('simpleicons-4/C/Coda')
```

|icon|element|
|---|---|
|![](Coda.png)|![](Coda.element.png)|



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
' loads the Coda element
include('simpleicons-4/C/Coda')
Coda('coda', 'Coda', 'an optional tech field')
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
' loads the Coda element
include('simpleicons-4/C/Coda')
Coda('coda', 'Coda', 'an optional tech field')
@enduml
```

