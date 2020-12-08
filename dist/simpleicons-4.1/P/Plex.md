# Plex

```text
simpleicons-4.1/P/Plex
```

```text
include('simpleicons-4.1/P/Plex')
```

|icon|element|
|---|---|
|![](Plex.png)|![](Plex.element.png)|



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
' loads the Plex element
include('simpleicons-4.1/P/Plex')
Plex('plex', 'Plex', 'an optional tech field')
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
' loads the Plex element
include('simpleicons-4.1/P/Plex')
Plex('plex', 'Plex', 'an optional tech field')
@enduml
```

