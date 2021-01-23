# Integromat

```text
simpleicons-4/I/Integromat
```

```text
include('simpleicons-4/I/Integromat')
```

|icon|element|
|---|---|
|![](Integromat.png)|![](Integromat.element.png)|



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
' loads the Integromat element
include('simpleicons-4/I/Integromat')
Integromat('integromat', 'Integromat', 'an optional tech field')
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
' loads the Integromat element
include('simpleicons-4/I/Integromat')
Integromat('integromat', 'Integromat', 'an optional tech field')
@enduml
```

