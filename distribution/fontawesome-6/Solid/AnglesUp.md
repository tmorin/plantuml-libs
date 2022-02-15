# AnglesUp


```text
fontawesome-6/Solid/AnglesUp
```

```text
include('fontawesome-6/Solid/AnglesUp')
```



| Illustration | AnglesUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AnglesUp.png) | ![illustration for AnglesUp](../../fontawesome-6/Solid/AnglesUp.Local.png) |




## AnglesUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnglesUp
include('fontawesome-6/Solid/AnglesUp')

' renders the element
AnglesUp('AnglesUp', 'Angles Up', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AnglesUp
include('fontawesome-6/Solid/AnglesUp')

' renders the element
AnglesUp('AnglesUp', 'Angles Up', 'an optional tech label')
@enduml
```

