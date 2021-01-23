# Redwoodjs

```text
simpleicons-4/R/Redwoodjs
```

```text
include('simpleicons-4/R/Redwoodjs')
```

|icon|element|
|---|---|
|![](Redwoodjs.png)|![](Redwoodjs.element.png)|



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
' loads the Redwoodjs element
include('simpleicons-4/R/Redwoodjs')
Redwoodjs('redwoodjs', 'Redwoodjs', 'an optional tech field')
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
' loads the Redwoodjs element
include('simpleicons-4/R/Redwoodjs')
Redwoodjs('redwoodjs', 'Redwoodjs', 'an optional tech field')
@enduml
```

