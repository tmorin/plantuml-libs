# Person Booth

```text
fontawesome-5.15/Solid/PersonBooth
```

```text
include('fontawesome-5.15/Solid/PersonBooth')
```

|icon|element|
|---|---|
|![](PersonBooth.png)|![](PersonBooth.element.png)|



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
' loads the PersonBooth element
include('fontawesome-5.15/Solid/PersonBooth')
PersonBooth('person_booth', 'Person Booth', 'an optional tech field')
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
' loads the PersonBooth element
include('fontawesome-5.15/Solid/PersonBooth')
PersonBooth('person_booth', 'Person Booth', 'an optional tech field')
@enduml
```

