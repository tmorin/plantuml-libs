# Ffmpeg


```text
simpleicons/F/Ffmpeg
```

```text
include('simpleicons/F/Ffmpeg')
```



| Illustration | Ffmpeg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Ffmpeg.png) | ![illustration for Ffmpeg](../../simpleicons/F/Ffmpeg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FfmpegXs>`
- `<$FfmpegSm>`
- `<$FfmpegMd>`
- `<$FfmpegLg>`





## Ffmpeg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons/F/Ffmpeg')

' renders the element
Ffmpeg('Ffmpeg', 'Ffmpeg', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons/F/Ffmpeg')

' renders the element
Ffmpeg('Ffmpeg', 'Ffmpeg', 'an optional tech label', 'an optional description')
@enduml
```

