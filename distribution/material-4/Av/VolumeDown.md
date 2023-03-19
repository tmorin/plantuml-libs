# VolumeDown


```text
material-4/Av/VolumeDown
```

```text
include('material-4/Av/VolumeDown')
```



| Illustration | VolumeDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VolumeDown.png) | ![illustration for VolumeDown](../../material-4/Av/VolumeDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolumeDownXs>`
- `<$VolumeDownSm>`
- `<$VolumeDownMd>`
- `<$VolumeDownLg>`





## VolumeDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VolumeDown
include('material-4/Av/VolumeDown')

' renders the element
VolumeDown('VolumeDown', 'Volume Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VolumeDown
include('material-4/Av/VolumeDown')

' renders the element
VolumeDown('VolumeDown', 'Volume Down', 'an optional tech label', 'an optional description')
@enduml
```

