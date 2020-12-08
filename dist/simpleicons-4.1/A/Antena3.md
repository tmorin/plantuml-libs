# Antena3

```text
simpleicons-4.1/A/Antena3
```

```text
include('simpleicons-4.1/A/Antena3')
```

|icon|element|
|---|---|
|![](Antena3.png)|![](Antena3.element.png)|



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
' loads the Antena3 element
include('simpleicons-4.1/A/Antena3')
Antena3('antena_3', 'Antena3', 'an optional tech field')
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
' loads the Antena3 element
include('simpleicons-4.1/A/Antena3')
Antena3('antena_3', 'Antena3', 'an optional tech field')
@enduml
```

