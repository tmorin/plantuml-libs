# Redux Saga

```text
simpleicons-4/R/ReduxSaga
```

```text
include('simpleicons-4/R/ReduxSaga')
```

|icon|element|
|---|---|
|![](ReduxSaga.png)|![](ReduxSaga.element.png)|



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
' loads the ReduxSaga element
include('simpleicons-4/R/ReduxSaga')
ReduxSaga('redux_saga', 'Redux Saga', 'an optional tech field')
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
' loads the ReduxSaga element
include('simpleicons-4/R/ReduxSaga')
ReduxSaga('redux_saga', 'Redux Saga', 'an optional tech field')
@enduml
```

