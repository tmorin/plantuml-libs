# Playstation3

```text
simpleicons-4/P/Playstation3
```

```text
include('simpleicons-4/P/Playstation3')
```

|icon|element|
|---|---|
|![](Playstation3.png)|![](Playstation3.element.png)|



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
' loads the Playstation3 element
include('simpleicons-4/P/Playstation3')
Playstation3('playstation_3', 'Playstation3', 'an optional tech field')
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
' loads the Playstation3 element
include('simpleicons-4/P/Playstation3')
Playstation3('playstation_3', 'Playstation3', 'an optional tech field')
@enduml
```

