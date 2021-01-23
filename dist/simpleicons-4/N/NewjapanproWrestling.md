# Newjapanpro Wrestling

```text
simpleicons-4/N/NewjapanproWrestling
```

```text
include('simpleicons-4/N/NewjapanproWrestling')
```

|icon|element|
|---|---|
|![](NewjapanproWrestling.png)|![](NewjapanproWrestling.element.png)|



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
' loads the NewjapanproWrestling element
include('simpleicons-4/N/NewjapanproWrestling')
NewjapanproWrestling('newjapanpro_wrestling', 'Newjapanpro Wrestling', 'an optional tech field')
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
' loads the NewjapanproWrestling element
include('simpleicons-4/N/NewjapanproWrestling')
NewjapanproWrestling('newjapanpro_wrestling', 'Newjapanpro Wrestling', 'an optional tech field')
@enduml
```

