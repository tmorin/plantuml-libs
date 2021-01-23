# Liberapay

```text
simpleicons-4/L/Liberapay
```

```text
include('simpleicons-4/L/Liberapay')
```

|icon|element|
|---|---|
|![](Liberapay.png)|![](Liberapay.element.png)|



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
' loads the Liberapay element
include('simpleicons-4/L/Liberapay')
Liberapay('liberapay', 'Liberapay', 'an optional tech field')
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
' loads the Liberapay element
include('simpleicons-4/L/Liberapay')
Liberapay('liberapay', 'Liberapay', 'an optional tech field')
@enduml
```

