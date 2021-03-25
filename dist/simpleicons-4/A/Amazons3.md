# Amazons3

```text
simpleicons-4/A/Amazons3
```

```text
include('simpleicons-4/A/Amazons3')
```

|icon|element|
|---|---|
|![](Amazons3.png)|![](Amazons3.element.png)|



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
' loads the Amazons3 element
include('simpleicons-4/A/Amazons3')
Amazons3('amazons_3', 'Amazons3', 'an optional tech field')
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
' loads the Amazons3 element
include('simpleicons-4/A/Amazons3')
Amazons3('amazons_3', 'Amazons3', 'an optional tech field')
@enduml
```

