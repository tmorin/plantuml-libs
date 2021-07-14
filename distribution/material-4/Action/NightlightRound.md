# NightlightRound


```text
material-4/Action/NightlightRound
```

```text
include('material-4/Action/NightlightRound')
```



| Illustration | NightlightRound |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/NightlightRound.png) | ![illustration for NightlightRound](../../material-4/Action/NightlightRound.Local.png) |




## NightlightRound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NightlightRound
include('material-4/Action/NightlightRound')

' renders the element
NightlightRound('NightlightRound', 'Nightlight Round', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element NightlightRound
include('material-4/Action/NightlightRound')

' renders the element
NightlightRound('NightlightRound', 'Nightlight Round', 'an optional tech label')
@enduml
```

