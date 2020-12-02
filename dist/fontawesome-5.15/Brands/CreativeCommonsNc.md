# Creative Commons Nc

```text
fontawesome-5.15/Brands/CreativeCommonsNc
```

```text
include('fontawesome-5.15/Brands/CreativeCommonsNc')
```

|icon|element|
|---|---|
|![](CreativeCommonsNc.png)|![](CreativeCommonsNc.element.png)|



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
' loads the CreativeCommonsNc element
include('fontawesome-5.15/Brands/CreativeCommonsNc')
CreativeCommonsNc('creative_commons_nc', 'Creative Commons Nc', 'an optional tech field')
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
' loads the CreativeCommonsNc element
include('fontawesome-5.15/Brands/CreativeCommonsNc')
CreativeCommonsNc('creative_commons_nc', 'Creative Commons Nc', 'an optional tech field')
@enduml
```

