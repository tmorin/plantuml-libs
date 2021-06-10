# FlagCheckered


```text
fontawesome-5/Solid/FlagCheckered
```

```text
include('fontawesome-5/Solid/FlagCheckered')
```



| Illustration | FlagCheckered |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FlagCheckered.png) | ![illustration for FlagCheckered](../../fontawesome-5/Solid/FlagCheckered.Local.png) |




## FlagCheckered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FlagCheckered
include('fontawesome-5/Solid/FlagCheckered')

' renders the element
FlagCheckered('FlagCheckered', 'Flag Checkered', 'an optional tech label')
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

' loads the Item which embeds the element FlagCheckered
include('fontawesome-5/Solid/FlagCheckered')

' renders the element
FlagCheckered('FlagCheckered', 'Flag Checkered', 'an optional tech label')
@enduml
```

