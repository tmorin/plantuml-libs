# VolumeMute


```text
material-4/Av/VolumeMute
```

```text
include('material-4/Av/VolumeMute')
```



| Illustration | VolumeMute |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VolumeMute.png) | ![illustration for VolumeMute](../../material-4/Av/VolumeMute.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeMuteXs>`
- `<$VolumeMuteSm>`
- `<$VolumeMuteMd>`
- `<$VolumeMuteLg>`





## VolumeMute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VolumeMute
include('material-4/Av/VolumeMute')

' renders the element
VolumeMute('VolumeMute', 'Volume Mute', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeMute
include('material-4/Av/VolumeMute')

' renders the element
VolumeMute('VolumeMute', 'Volume Mute', 'an optional tech label', 'an optional description')
@enduml
```

