# Creative Commons Nc Eu

```text
fontawesome-5.15/Brands/CreativeCommonsNcEu
```

```text
include('fontawesome-5.15/Brands/CreativeCommonsNcEu')
```

|icon|element|
|---|---|
|![](CreativeCommonsNcEu.png)|![](CreativeCommonsNcEu.element.png)|



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
' loads the CreativeCommonsNcEu element
include('fontawesome-5.15/Brands/CreativeCommonsNcEu')
CreativeCommonsNcEu('creative_commons_nc_eu', 'Creative Commons Nc Eu', 'an optional tech field')
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
' loads the CreativeCommonsNcEu element
include('fontawesome-5.15/Brands/CreativeCommonsNcEu')
CreativeCommonsNcEu('creative_commons_nc_eu', 'Creative Commons Nc Eu', 'an optional tech field')
@enduml
```

