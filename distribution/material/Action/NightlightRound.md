# NightlightRound


```text
material/Action/NightlightRound
```

```text
include('material/Action/NightlightRound')
```



| Illustration | NightlightRound |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/NightlightRound.png) | ![illustration for NightlightRound](../../material/Action/NightlightRound.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NightlightRoundXs>`
- `<$NightlightRoundSm>`
- `<$NightlightRoundMd>`
- `<$NightlightRoundLg>`





## NightlightRound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NightlightRound
include('material/Action/NightlightRound')

' renders the element
NightlightRound('NightlightRound', 'Nightlight Round', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NightlightRound
include('material/Action/NightlightRound')

' renders the element
NightlightRound('NightlightRound', 'Nightlight Round', 'an optional tech label', 'an optional description')
@enduml
```

