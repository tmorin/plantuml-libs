# Playstation2

```text
simpleicons-4/P/Playstation2
```

```text
include('simpleicons-4/P/Playstation2')
```

|icon|element|
|---|---|
|![](Playstation2.png)|![](Playstation2.element.png)|



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
' loads the Playstation2 element
include('simpleicons-4/P/Playstation2')
Playstation2('playstation_2', 'Playstation2', 'an optional tech field')
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
' loads the Playstation2 element
include('simpleicons-4/P/Playstation2')
Playstation2('playstation_2', 'Playstation2', 'an optional tech field')
@enduml
```

