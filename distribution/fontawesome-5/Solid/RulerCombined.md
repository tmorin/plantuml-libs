# RulerCombined


```text
fontawesome-5/Solid/RulerCombined
```

```text
include('fontawesome-5/Solid/RulerCombined')
```



| Illustration | RulerCombined |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/RulerCombined.png) | ![illustration for RulerCombined](../../fontawesome-5/Solid/RulerCombined.Local.png) |




## RulerCombined

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RulerCombined
include('fontawesome-5/Solid/RulerCombined')

' renders the element
RulerCombined('RulerCombined', 'Ruler Combined', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RulerCombined
include('fontawesome-5/Solid/RulerCombined')

' renders the element
RulerCombined('RulerCombined', 'Ruler Combined', 'an optional tech label')
@enduml
```

