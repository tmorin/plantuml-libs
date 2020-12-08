# Archicad

```text
simpleicons-4.1/A/Archicad
```

```text
include('simpleicons-4.1/A/Archicad')
```

|icon|element|
|---|---|
|![](Archicad.png)|![](Archicad.element.png)|



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
' loads the Archicad element
include('simpleicons-4.1/A/Archicad')
Archicad('archicad', 'Archicad', 'an optional tech field')
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
' loads the Archicad element
include('simpleicons-4.1/A/Archicad')
Archicad('archicad', 'Archicad', 'an optional tech field')
@enduml
```

