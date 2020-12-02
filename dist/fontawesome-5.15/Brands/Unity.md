# Unity

```text
fontawesome-5.15/Brands/Unity
```

```text
include('fontawesome-5.15/Brands/Unity')
```

|icon|element|
|---|---|
|![](Unity.png)|![](Unity.element.png)|



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
' loads the Unity element
include('fontawesome-5.15/Brands/Unity')
Unity('unity', 'Unity', 'an optional tech field')
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
' loads the Unity element
include('fontawesome-5.15/Brands/Unity')
Unity('unity', 'Unity', 'an optional tech field')
@enduml
```

