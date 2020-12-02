# Redhat

```text
fontawesome-5.15/Brands/Redhat
```

```text
include('fontawesome-5.15/Brands/Redhat')
```

|icon|element|
|---|---|
|![](Redhat.png)|![](Redhat.element.png)|



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
' loads the Redhat element
include('fontawesome-5.15/Brands/Redhat')
Redhat('redhat', 'Redhat', 'an optional tech field')
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
' loads the Redhat element
include('fontawesome-5.15/Brands/Redhat')
Redhat('redhat', 'Redhat', 'an optional tech field')
@enduml
```

