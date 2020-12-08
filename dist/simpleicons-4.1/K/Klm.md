# Klm

```text
simpleicons-4.1/K/Klm
```

```text
include('simpleicons-4.1/K/Klm')
```

|icon|element|
|---|---|
|![](Klm.png)|![](Klm.element.png)|



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
' loads the Klm element
include('simpleicons-4.1/K/Klm')
Klm('klm', 'Klm', 'an optional tech field')
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
' loads the Klm element
include('simpleicons-4.1/K/Klm')
Klm('klm', 'Klm', 'an optional tech field')
@enduml
```

