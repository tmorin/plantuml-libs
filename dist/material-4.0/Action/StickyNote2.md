# Sticky Note2

```text
material-4.0/Action/StickyNote2
```

```text
include('material-4.0/Action/StickyNote2')
```

|icon|element|
|---|---|
|![](StickyNote2.png)|![](StickyNote2.element.png)|



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
' loads the StickyNote2 element
include('material-4.0/Action/StickyNote2')
StickyNote2('sticky_note_2', 'Sticky Note2', 'an optional tech field')
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
' loads the StickyNote2 element
include('material-4.0/Action/StickyNote2')
StickyNote2('sticky_note_2', 'Sticky Note2', 'an optional tech field')
@enduml
```

