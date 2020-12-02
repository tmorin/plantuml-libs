# Headphones

```text
fontawesome-5.15/Solid/Headphones
```

```text
include('fontawesome-5.15/Solid/Headphones')
```

|icon|element|
|---|---|
|![](Headphones.png)|![](Headphones.element.png)|



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
' loads the Headphones element
include('fontawesome-5.15/Solid/Headphones')
Headphones('headphones', 'Headphones', 'an optional tech field')
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
' loads the Headphones element
include('fontawesome-5.15/Solid/Headphones')
Headphones('headphones', 'Headphones', 'an optional tech field')
@enduml
```

