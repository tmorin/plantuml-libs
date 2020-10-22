# Mode Comment

```text
material-4.0/Editor/ModeComment
```

```text
include('material-4.0/Editor/ModeComment')
```

|icon|element|
|---|---|
|![](ModeComment.png)|![](ModeComment.element.png)|



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
' loads the ModeComment element
include('material-4.0/Editor/ModeComment')
ModeComment('mode_comment', 'Mode Comment', 'an optional tech field')
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
' loads the ModeComment element
include('material-4.0/Editor/ModeComment')
ModeComment('mode_comment', 'Mode Comment', 'an optional tech field')
@enduml
```

