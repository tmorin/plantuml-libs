# PlayDisabled


```text
material/Av/PlayDisabled
```

```text
include('material/Av/PlayDisabled')
```



| Illustration | PlayDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/PlayDisabled.png) | ![illustration for PlayDisabled](../../material/Av/PlayDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlayDisabledXs>`
- `<$PlayDisabledSm>`
- `<$PlayDisabledMd>`
- `<$PlayDisabledLg>`





## PlayDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PlayDisabled
include('material/Av/PlayDisabled')

' renders the element
PlayDisabled('PlayDisabled', 'Play Disabled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlayDisabled
include('material/Av/PlayDisabled')

' renders the element
PlayDisabled('PlayDisabled', 'Play Disabled', 'an optional tech label', 'an optional description')
@enduml
```

