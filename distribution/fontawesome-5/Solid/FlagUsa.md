# FlagUsa


```text
fontawesome-5/Solid/FlagUsa
```

```text
include('fontawesome-5/Solid/FlagUsa')
```



| Illustration | FlagUsa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FlagUsa.png) | ![illustration for FlagUsa](../../fontawesome-5/Solid/FlagUsa.Local.png) |




## FlagUsa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FlagUsa
include('fontawesome-5/Solid/FlagUsa')

' renders the element
FlagUsa('FlagUsa', 'Flag Usa', 'an optional tech label')
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

' loads the Item which embeds the element FlagUsa
include('fontawesome-5/Solid/FlagUsa')

' renders the element
FlagUsa('FlagUsa', 'Flag Usa', 'an optional tech label')
@enduml
```

