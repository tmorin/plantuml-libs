# PlayDisabled


```text
material-4/Av/PlayDisabled
```

```text
include('material-4/Av/PlayDisabled')
```



| Illustration | PlayDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/PlayDisabled.png) | ![illustration for PlayDisabled](../../material-4/Av/PlayDisabled.Local.png) |




## PlayDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PlayDisabled
include('material-4/Av/PlayDisabled')

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
include('material-4/bootstrap')

' loads the Item which embeds the element PlayDisabled
include('material-4/Av/PlayDisabled')

' renders the element
PlayDisabled('PlayDisabled', 'Play Disabled', 'an optional tech label', 'an optional description')
@enduml
```

