# Creative Commons Nc Jp

```text
fontawesome-5.15/Brands/CreativeCommonsNcJp
```

```text
include('fontawesome-5.15/Brands/CreativeCommonsNcJp')
```

|icon|element|
|---|---|
|![](CreativeCommonsNcJp.png)|![](CreativeCommonsNcJp.element.png)|



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
' loads the CreativeCommonsNcJp element
include('fontawesome-5.15/Brands/CreativeCommonsNcJp')
CreativeCommonsNcJp('creative_commons_nc_jp', 'Creative Commons Nc Jp', 'an optional tech field')
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
' loads the CreativeCommonsNcJp element
include('fontawesome-5.15/Brands/CreativeCommonsNcJp')
CreativeCommonsNcJp('creative_commons_nc_jp', 'Creative Commons Nc Jp', 'an optional tech field')
@enduml
```

