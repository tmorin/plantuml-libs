# Draft2 Digital

```text
fontawesome-5.15/Brands/Draft2Digital
```

```text
include('fontawesome-5.15/Brands/Draft2Digital')
```

|icon|element|
|---|---|
|![](Draft2Digital.png)|![](Draft2Digital.element.png)|



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
' loads the Draft2Digital element
include('fontawesome-5.15/Brands/Draft2Digital')
Draft2Digital('draft_2_digital', 'Draft2 Digital', 'an optional tech field')
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
' loads the Draft2Digital element
include('fontawesome-5.15/Brands/Draft2Digital')
Draft2Digital('draft_2_digital', 'Draft2 Digital', 'an optional tech field')
@enduml
```

