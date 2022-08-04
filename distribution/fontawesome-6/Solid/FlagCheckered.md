# FlagCheckered


```text
fontawesome-6/Solid/FlagCheckered
```

```text
include('fontawesome-6/Solid/FlagCheckered')
```



| Illustration | FlagCheckered |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FlagCheckered.png) | ![illustration for FlagCheckered](../../fontawesome-6/Solid/FlagCheckered.Local.png) |




## FlagCheckered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FlagCheckered
include('fontawesome-6/Solid/FlagCheckered')

' renders the element
FlagCheckered('FlagCheckered', 'Flag Checkered', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlagCheckered
include('fontawesome-6/Solid/FlagCheckered')

' renders the element
FlagCheckered('FlagCheckered', 'Flag Checkered', 'an optional tech label', 'an optional description')
@enduml
```

