# Kahoot

```text
simpleicons-4/K/Kahoot
```

```text
include('simpleicons-4/K/Kahoot')
```

|icon|element|
|---|---|
|![](Kahoot.png)|![](Kahoot.element.png)|



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
' loads the Kahoot element
include('simpleicons-4/K/Kahoot')
Kahoot('kahoot', 'Kahoot', 'an optional tech field')
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
' loads the Kahoot element
include('simpleicons-4/K/Kahoot')
Kahoot('kahoot', 'Kahoot', 'an optional tech field')
@enduml
```

