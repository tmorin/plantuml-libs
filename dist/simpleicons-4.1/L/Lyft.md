# Lyft

```text
simpleicons-4.1/L/Lyft
```

```text
include('simpleicons-4.1/L/Lyft')
```

|icon|element|
|---|---|
|![](Lyft.png)|![](Lyft.element.png)|



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
' loads the Lyft element
include('simpleicons-4.1/L/Lyft')
Lyft('lyft', 'Lyft', 'an optional tech field')
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
' loads the Lyft element
include('simpleicons-4.1/L/Lyft')
Lyft('lyft', 'Lyft', 'an optional tech field')
@enduml
```

