# Openaccess

```text
simpleicons-4/O/Openaccess
```

```text
include('simpleicons-4/O/Openaccess')
```

|icon|element|
|---|---|
|![](Openaccess.png)|![](Openaccess.element.png)|



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
' loads the Openaccess element
include('simpleicons-4/O/Openaccess')
Openaccess('openaccess', 'Openaccess', 'an optional tech field')
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
' loads the Openaccess element
include('simpleicons-4/O/Openaccess')
Openaccess('openaccess', 'Openaccess', 'an optional tech field')
@enduml
```

