# Aircanada

```text
simpleicons-4/A/Aircanada
```

```text
include('simpleicons-4/A/Aircanada')
```

|icon|element|
|---|---|
|![](Aircanada.png)|![](Aircanada.element.png)|



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
' loads the Aircanada element
include('simpleicons-4/A/Aircanada')
Aircanada('aircanada', 'Aircanada', 'an optional tech field')
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
' loads the Aircanada element
include('simpleicons-4/A/Aircanada')
Aircanada('aircanada', 'Aircanada', 'an optional tech field')
@enduml
```

