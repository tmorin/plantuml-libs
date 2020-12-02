# Rocketchat

```text
fontawesome-5.15/Brands/Rocketchat
```

```text
include('fontawesome-5.15/Brands/Rocketchat')
```

|icon|element|
|---|---|
|![](Rocketchat.png)|![](Rocketchat.element.png)|



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
' loads the Rocketchat element
include('fontawesome-5.15/Brands/Rocketchat')
Rocketchat('rocketchat', 'Rocketchat', 'an optional tech field')
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
' loads the Rocketchat element
include('fontawesome-5.15/Brands/Rocketchat')
Rocketchat('rocketchat', 'Rocketchat', 'an optional tech field')
@enduml
```

