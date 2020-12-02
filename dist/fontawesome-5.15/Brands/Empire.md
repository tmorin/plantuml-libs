# Empire

```text
fontawesome-5.15/Brands/Empire
```

```text
include('fontawesome-5.15/Brands/Empire')
```

|icon|element|
|---|---|
|![](Empire.png)|![](Empire.element.png)|



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
' loads the Empire element
include('fontawesome-5.15/Brands/Empire')
Empire('empire', 'Empire', 'an optional tech field')
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
' loads the Empire element
include('fontawesome-5.15/Brands/Empire')
Empire('empire', 'Empire', 'an optional tech field')
@enduml
```

