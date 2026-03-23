# VolumeMute


```text
fontawesome/Solid/VolumeMute
```

```text
include('fontawesome/Solid/VolumeMute')
```



| Illustration | VolumeMute |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VolumeMute.png) | ![illustration for VolumeMute](../../fontawesome/Solid/VolumeMute.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeMute
include('fontawesome/Solid/VolumeMute')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element VolumeMute
include('fontawesome/Solid/VolumeMute')

' renders the element
VolumeMute('VolumeMute', 'Volume Mute', 'an optional tech label', 'an optional description')
@enduml
```

