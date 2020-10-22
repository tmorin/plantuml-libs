# Thumb Down Off Alt

```text
material-4.0/Action/ThumbDownOffAlt
```

```text
include('material-4.0/Action/ThumbDownOffAlt')
```

|icon|element|
|---|---|
|![](ThumbDownOffAlt.png)|![](ThumbDownOffAlt.element.png)|



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
' loads the ThumbDownOffAlt element
include('material-4.0/Action/ThumbDownOffAlt')
ThumbDownOffAlt('thumb_down_off_alt', 'Thumb Down Off Alt', 'an optional tech field')
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
' loads the ThumbDownOffAlt element
include('material-4.0/Action/ThumbDownOffAlt')
ThumbDownOffAlt('thumb_down_off_alt', 'Thumb Down Off Alt', 'an optional tech field')
@enduml
```

