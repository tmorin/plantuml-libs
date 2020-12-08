# Draugiem Dot Lv

```text
simpleicons-4.1/D/DraugiemDotLv
```

```text
include('simpleicons-4.1/D/DraugiemDotLv')
```

|icon|element|
|---|---|
|![](DraugiemDotLv.png)|![](DraugiemDotLv.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the DraugiemDotLv element
include('simpleicons-4.1/D/DraugiemDotLv')
DraugiemDotLv('draugiem_dot_lv', 'Draugiem Dot Lv', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the DraugiemDotLv element
include('simpleicons-4.1/D/DraugiemDotLv')
DraugiemDotLv('draugiem_dot_lv', 'Draugiem Dot Lv', 'an optional tech field')
@enduml
```

