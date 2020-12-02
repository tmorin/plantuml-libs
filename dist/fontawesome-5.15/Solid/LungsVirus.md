# Lungs Virus

```text
fontawesome-5.15/Solid/LungsVirus
```

```text
include('fontawesome-5.15/Solid/LungsVirus')
```

|icon|element|
|---|---|
|![](LungsVirus.png)|![](LungsVirus.element.png)|



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
' loads the LungsVirus element
include('fontawesome-5.15/Solid/LungsVirus')
LungsVirus('lungs_virus', 'Lungs Virus', 'an optional tech field')
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
' loads the LungsVirus element
include('fontawesome-5.15/Solid/LungsVirus')
LungsVirus('lungs_virus', 'Lungs Virus', 'an optional tech field')
@enduml
```

