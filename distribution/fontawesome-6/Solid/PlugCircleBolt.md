# PlugCircleBolt


```text
fontawesome-6/Solid/PlugCircleBolt
```

```text
include('fontawesome-6/Solid/PlugCircleBolt')
```



| Illustration | PlugCircleBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlugCircleBolt.png) | ![illustration for PlugCircleBolt](../../fontawesome-6/Solid/PlugCircleBolt.Local.png) |




## PlugCircleBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlugCircleBolt
include('fontawesome-6/Solid/PlugCircleBolt')

' renders the element
PlugCircleBolt('PlugCircleBolt', 'Plug Circle Bolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlugCircleBolt
include('fontawesome-6/Solid/PlugCircleBolt')

' renders the element
PlugCircleBolt('PlugCircleBolt', 'Plug Circle Bolt', 'an optional tech label', 'an optional description')
@enduml
```

