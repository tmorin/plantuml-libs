# Medium M

```text
fontawesome-5.15/Brands/MediumM
```

```text
include('fontawesome-5.15/Brands/MediumM')
```

|icon|element|
|---|---|
|![](MediumM.png)|![](MediumM.element.png)|



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
' loads the MediumM element
include('fontawesome-5.15/Brands/MediumM')
MediumM('medium_m', 'Medium M', 'an optional tech field')
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
' loads the MediumM element
include('fontawesome-5.15/Brands/MediumM')
MediumM('medium_m', 'Medium M', 'an optional tech field')
@enduml
```

