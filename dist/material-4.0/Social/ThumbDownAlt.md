# Thumb Down Alt

```text
material-4.0/Social/ThumbDownAlt
```

```text
include('material-4.0/Social/ThumbDownAlt')
```

|icon|element|
|---|---|
|![](ThumbDownAlt.png)|![](ThumbDownAlt.element.png)|



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
' loads the ThumbDownAlt element
include('material-4.0/Social/ThumbDownAlt')
ThumbDownAlt('thumb_down_alt', 'Thumb Down Alt', 'an optional tech field')
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
' loads the ThumbDownAlt element
include('material-4.0/Social/ThumbDownAlt')
ThumbDownAlt('thumb_down_alt', 'Thumb Down Alt', 'an optional tech field')
@enduml
```

