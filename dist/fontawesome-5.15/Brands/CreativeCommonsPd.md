# Creative Commons Pd

```text
fontawesome-5.15/Brands/CreativeCommonsPd
```

```text
include('fontawesome-5.15/Brands/CreativeCommonsPd')
```

|icon|element|
|---|---|
|![](CreativeCommonsPd.png)|![](CreativeCommonsPd.element.png)|



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
' loads the CreativeCommonsPd element
include('fontawesome-5.15/Brands/CreativeCommonsPd')
CreativeCommonsPd('creative_commons_pd', 'Creative Commons Pd', 'an optional tech field')
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
' loads the CreativeCommonsPd element
include('fontawesome-5.15/Brands/CreativeCommonsPd')
CreativeCommonsPd('creative_commons_pd', 'Creative Commons Pd', 'an optional tech field')
@enduml
```

