# Quest

```text
simpleicons-4.1/Q/Quest
```

```text
include('simpleicons-4.1/Q/Quest')
```

|icon|element|
|---|---|
|![](Quest.png)|![](Quest.element.png)|



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
' loads the Quest element
include('simpleicons-4.1/Q/Quest')
Quest('quest', 'Quest', 'an optional tech field')
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
' loads the Quest element
include('simpleicons-4.1/Q/Quest')
Quest('quest', 'Quest', 'an optional tech field')
@enduml
```

