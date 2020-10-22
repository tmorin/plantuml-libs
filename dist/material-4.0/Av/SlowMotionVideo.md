# Slow Motion Video

```text
material-4.0/Av/SlowMotionVideo
```

```text
include('material-4.0/Av/SlowMotionVideo')
```

|icon|element|
|---|---|
|![](SlowMotionVideo.png)|![](SlowMotionVideo.element.png)|



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
' loads the SlowMotionVideo element
include('material-4.0/Av/SlowMotionVideo')
SlowMotionVideo('slow_motion_video', 'Slow Motion Video', 'an optional tech field')
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
' loads the SlowMotionVideo element
include('material-4.0/Av/SlowMotionVideo')
SlowMotionVideo('slow_motion_video', 'Slow Motion Video', 'an optional tech field')
@enduml
```

