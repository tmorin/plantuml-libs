# Festival

```text
material-4.0/Maps/Festival
```

```text
include('material-4.0/Maps/Festival')
```

|icon|element|
|---|---|
|![](Festival.png)|![](Festival.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the Festival element
include('material-4.0/Maps/Festival')
Festival('festival', 'Festival', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the Festival element
include('material-4.0/Maps/Festival')
Festival('festival', 'Festival', 'an optional tech field')
@enduml
```

