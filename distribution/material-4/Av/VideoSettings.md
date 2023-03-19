# VideoSettings


```text
material-4/Av/VideoSettings
```

```text
include('material-4/Av/VideoSettings')
```



| Illustration | VideoSettings |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VideoSettings.png) | ![illustration for VideoSettings](../../material-4/Av/VideoSettings.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideoSettingsXs>`
- `<$VideoSettingsSm>`
- `<$VideoSettingsMd>`
- `<$VideoSettingsLg>`





## VideoSettings

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VideoSettings
include('material-4/Av/VideoSettings')

' renders the element
VideoSettings('VideoSettings', 'Video Settings', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideoSettings
include('material-4/Av/VideoSettings')

' renders the element
VideoSettings('VideoSettings', 'Video Settings', 'an optional tech label', 'an optional description')
@enduml
```

