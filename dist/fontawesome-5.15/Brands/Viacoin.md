# Viacoin

```text
fontawesome-5.15/Brands/Viacoin
```

```text
include('fontawesome-5.15/Brands/Viacoin')
```

|icon|element|
|---|---|
|![](Viacoin.png)|![](Viacoin.element.png)|



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
' loads the Viacoin element
include('fontawesome-5.15/Brands/Viacoin')
Viacoin('viacoin', 'Viacoin', 'an optional tech field')
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
' loads the Viacoin element
include('fontawesome-5.15/Brands/Viacoin')
Viacoin('viacoin', 'Viacoin', 'an optional tech field')
@enduml
```

