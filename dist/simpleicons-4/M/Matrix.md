# Matrix

```text
simpleicons-4/M/Matrix
```

```text
include('simpleicons-4/M/Matrix')
```

|icon|element|
|---|---|
|![](Matrix.png)|![](Matrix.element.png)|



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
' loads the Matrix element
include('simpleicons-4/M/Matrix')
Matrix('matrix', 'Matrix', 'an optional tech field')
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
' loads the Matrix element
include('simpleicons-4/M/Matrix')
Matrix('matrix', 'Matrix', 'an optional tech field')
@enduml
```

