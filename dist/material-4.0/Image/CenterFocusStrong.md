# Center Focus Strong

```text
material-4.0/Image/CenterFocusStrong
```

```text
include('material-4.0/Image/CenterFocusStrong')
```

|icon|element|
|---|---|
|![](CenterFocusStrong.png)|![](CenterFocusStrong.element.png)|



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
' loads the CenterFocusStrong element
include('material-4.0/Image/CenterFocusStrong')
CenterFocusStrong('center_focus_strong', 'Center Focus Strong', 'an optional tech field')
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
' loads the CenterFocusStrong element
include('material-4.0/Image/CenterFocusStrong')
CenterFocusStrong('center_focus_strong', 'Center Focus Strong', 'an optional tech field')
@enduml
```

