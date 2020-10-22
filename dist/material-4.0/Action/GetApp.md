# Get App

```text
material-4.0/Action/GetApp
```

```text
include('material-4.0/Action/GetApp')
```

|icon|element|
|---|---|
|![](GetApp.png)|![](GetApp.element.png)|



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
' loads the GetApp element
include('material-4.0/Action/GetApp')
GetApp('get_app', 'Get App', 'an optional tech field')
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
' loads the GetApp element
include('material-4.0/Action/GetApp')
GetApp('get_app', 'Get App', 'an optional tech field')
@enduml
```

