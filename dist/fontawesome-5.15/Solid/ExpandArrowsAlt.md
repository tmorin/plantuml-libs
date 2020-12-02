# Expand Arrows Alt

```text
fontawesome-5.15/Solid/ExpandArrowsAlt
```

```text
include('fontawesome-5.15/Solid/ExpandArrowsAlt')
```

|icon|element|
|---|---|
|![](ExpandArrowsAlt.png)|![](ExpandArrowsAlt.element.png)|



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
' loads the ExpandArrowsAlt element
include('fontawesome-5.15/Solid/ExpandArrowsAlt')
ExpandArrowsAlt('expand_arrows_alt', 'Expand Arrows Alt', 'an optional tech field')
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
' loads the ExpandArrowsAlt element
include('fontawesome-5.15/Solid/ExpandArrowsAlt')
ExpandArrowsAlt('expand_arrows_alt', 'Expand Arrows Alt', 'an optional tech field')
@enduml
```

