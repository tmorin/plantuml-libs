# Ns8

```text
fontawesome-5.15/Brands/Ns8
```

```text
include('fontawesome-5.15/Brands/Ns8')
```

|icon|element|
|---|---|
|![](Ns8.png)|![](Ns8.element.png)|



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
' loads the Ns8 element
include('fontawesome-5.15/Brands/Ns8')
Ns8('ns_8', 'Ns8', 'an optional tech field')
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
' loads the Ns8 element
include('fontawesome-5.15/Brands/Ns8')
Ns8('ns_8', 'Ns8', 'an optional tech field')
@enduml
```

