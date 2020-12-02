# Galactic Republic

```text
fontawesome-5.15/Brands/GalacticRepublic
```

```text
include('fontawesome-5.15/Brands/GalacticRepublic')
```

|icon|element|
|---|---|
|![](GalacticRepublic.png)|![](GalacticRepublic.element.png)|



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
' loads the GalacticRepublic element
include('fontawesome-5.15/Brands/GalacticRepublic')
GalacticRepublic('galactic_republic', 'Galactic Republic', 'an optional tech field')
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
' loads the GalacticRepublic element
include('fontawesome-5.15/Brands/GalacticRepublic')
GalacticRepublic('galactic_republic', 'Galactic Republic', 'an optional tech field')
@enduml
```

