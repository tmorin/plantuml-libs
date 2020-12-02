# Flag

```text
fontawesome-5.15/Regular/Flag
```

```text
include('fontawesome-5.15/Regular/Flag')
```

|icon|element|
|---|---|
|![](Flag.png)|![](Flag.element.png)|



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
' loads the Flag element
include('fontawesome-5.15/Regular/Flag')
Flag('flag', 'Flag', 'an optional tech field')
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
' loads the Flag element
include('fontawesome-5.15/Regular/Flag')
Flag('flag', 'Flag', 'an optional tech field')
@enduml
```

