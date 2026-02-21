# QueueMusic


```text
material/Av/QueueMusic
```

```text
include('material/Av/QueueMusic')
```



| Illustration | QueueMusic |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/QueueMusic.png) | ![illustration for QueueMusic](../../material/Av/QueueMusic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QueueMusicXs>`
- `<$QueueMusicSm>`
- `<$QueueMusicMd>`
- `<$QueueMusicLg>`





## QueueMusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element QueueMusic
include('material/Av/QueueMusic')

' renders the element
QueueMusic('QueueMusic', 'Queue Music', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QueueMusic
include('material/Av/QueueMusic')

' renders the element
QueueMusic('QueueMusic', 'Queue Music', 'an optional tech label', 'an optional description')
@enduml
```

