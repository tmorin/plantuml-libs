# Compact Disc

```text
fontawesome-5.15/Solid/CompactDisc
```

```text
include('fontawesome-5.15/Solid/CompactDisc')
```

|icon|element|
|---|---|
|![](CompactDisc.png)|![](CompactDisc.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the CompactDisc element
include('fontawesome-5.15/Solid/CompactDisc')
CompactDisc('compact_disc', 'Compact Disc', 'an optional tech field')
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
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the CompactDisc element
include('fontawesome-5.15/Solid/CompactDisc')
CompactDisc('compact_disc', 'Compact Disc', 'an optional tech field')
@enduml
```

