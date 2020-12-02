# Pagelines

```text
fontawesome-5.15/Brands/Pagelines
```

```text
include('fontawesome-5.15/Brands/Pagelines')
```

|icon|element|
|---|---|
|![](Pagelines.png)|![](Pagelines.element.png)|



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
' loads the Pagelines element
include('fontawesome-5.15/Brands/Pagelines')
Pagelines('pagelines', 'Pagelines', 'an optional tech field')
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
' loads the Pagelines element
include('fontawesome-5.15/Brands/Pagelines')
Pagelines('pagelines', 'Pagelines', 'an optional tech field')
@enduml
```

