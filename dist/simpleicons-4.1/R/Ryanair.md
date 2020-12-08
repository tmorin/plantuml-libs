# Ryanair

```text
simpleicons-4.1/R/Ryanair
```

```text
include('simpleicons-4.1/R/Ryanair')
```

|icon|element|
|---|---|
|![](Ryanair.png)|![](Ryanair.element.png)|



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
' loads the Ryanair element
include('simpleicons-4.1/R/Ryanair')
Ryanair('ryanair', 'Ryanair', 'an optional tech field')
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
' loads the Ryanair element
include('simpleicons-4.1/R/Ryanair')
Ryanair('ryanair', 'Ryanair', 'an optional tech field')
@enduml
```

