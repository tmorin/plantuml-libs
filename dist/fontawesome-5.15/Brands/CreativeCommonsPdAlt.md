# Creative Commons Pd Alt

```text
fontawesome-5.15/Brands/CreativeCommonsPdAlt
```

```text
include('fontawesome-5.15/Brands/CreativeCommonsPdAlt')
```

|icon|element|
|---|---|
|![](CreativeCommonsPdAlt.png)|![](CreativeCommonsPdAlt.element.png)|



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
' loads the CreativeCommonsPdAlt element
include('fontawesome-5.15/Brands/CreativeCommonsPdAlt')
CreativeCommonsPdAlt('creative_commons_pd_alt', 'Creative Commons Pd Alt', 'an optional tech field')
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
' loads the CreativeCommonsPdAlt element
include('fontawesome-5.15/Brands/CreativeCommonsPdAlt')
CreativeCommonsPdAlt('creative_commons_pd_alt', 'Creative Commons Pd Alt', 'an optional tech field')
@enduml
```

