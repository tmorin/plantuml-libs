# Monster

```text
simpleicons-4/M/Monster
```

```text
include('simpleicons-4/M/Monster')
```

|icon|element|
|---|---|
|![](Monster.png)|![](Monster.element.png)|



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
' loads the Monster element
include('simpleicons-4/M/Monster')
Monster('monster', 'Monster', 'an optional tech field')
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
' loads the Monster element
include('simpleicons-4/M/Monster')
Monster('monster', 'Monster', 'an optional tech field')
@enduml
```

