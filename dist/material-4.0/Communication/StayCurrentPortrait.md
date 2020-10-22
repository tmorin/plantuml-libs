# Stay Current Portrait

```text
material-4.0/Communication/StayCurrentPortrait
```

```text
include('material-4.0/Communication/StayCurrentPortrait')
```

|icon|element|
|---|---|
|![](StayCurrentPortrait.png)|![](StayCurrentPortrait.element.png)|



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
' loads the StayCurrentPortrait element
include('material-4.0/Communication/StayCurrentPortrait')
StayCurrentPortrait('stay_current_portrait', 'Stay Current Portrait', 'an optional tech field')
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
' loads the StayCurrentPortrait element
include('material-4.0/Communication/StayCurrentPortrait')
StayCurrentPortrait('stay_current_portrait', 'Stay Current Portrait', 'an optional tech field')
@enduml
```

