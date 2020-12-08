# Playstation4

```text
simpleicons-4.1/P/Playstation4
```

```text
include('simpleicons-4.1/P/Playstation4')
```

|icon|element|
|---|---|
|![](Playstation4.png)|![](Playstation4.element.png)|



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
' loads the Playstation4 element
include('simpleicons-4.1/P/Playstation4')
Playstation4('playstation_4', 'Playstation4', 'an optional tech field')
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
' loads the Playstation4 element
include('simpleicons-4.1/P/Playstation4')
Playstation4('playstation_4', 'Playstation4', 'an optional tech field')
@enduml
```

