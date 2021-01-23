# Ibeacon

```text
simpleicons-4/I/Ibeacon
```

```text
include('simpleicons-4/I/Ibeacon')
```

|icon|element|
|---|---|
|![](Ibeacon.png)|![](Ibeacon.element.png)|



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
' loads the Ibeacon element
include('simpleicons-4/I/Ibeacon')
Ibeacon('ibeacon', 'Ibeacon', 'an optional tech field')
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
' loads the Ibeacon element
include('simpleicons-4/I/Ibeacon')
Ibeacon('ibeacon', 'Ibeacon', 'an optional tech field')
@enduml
```

