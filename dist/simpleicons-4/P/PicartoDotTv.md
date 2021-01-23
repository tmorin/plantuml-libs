# Picarto Dot Tv

```text
simpleicons-4/P/PicartoDotTv
```

```text
include('simpleicons-4/P/PicartoDotTv')
```

|icon|element|
|---|---|
|![](PicartoDotTv.png)|![](PicartoDotTv.element.png)|



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
' loads the PicartoDotTv element
include('simpleicons-4/P/PicartoDotTv')
PicartoDotTv('picarto_dot_tv', 'Picarto Dot Tv', 'an optional tech field')
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
' loads the PicartoDotTv element
include('simpleicons-4/P/PicartoDotTv')
PicartoDotTv('picarto_dot_tv', 'Picarto Dot Tv', 'an optional tech field')
@enduml
```
