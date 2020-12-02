# Staylinked

```text
fontawesome-5.15/Brands/Staylinked
```

```text
include('fontawesome-5.15/Brands/Staylinked')
```

|icon|element|
|---|---|
|![](Staylinked.png)|![](Staylinked.element.png)|



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
' loads the Staylinked element
include('fontawesome-5.15/Brands/Staylinked')
Staylinked('staylinked', 'Staylinked', 'an optional tech field')
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
' loads the Staylinked element
include('fontawesome-5.15/Brands/Staylinked')
Staylinked('staylinked', 'Staylinked', 'an optional tech field')
@enduml
```

