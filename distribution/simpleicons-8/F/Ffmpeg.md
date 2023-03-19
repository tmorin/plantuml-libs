# Ffmpeg


```text
simpleicons-8/F/Ffmpeg
```

```text
include('simpleicons-8/F/Ffmpeg')
```



| Illustration | Ffmpeg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Ffmpeg.png) | ![illustration for Ffmpeg](../../simpleicons-8/F/Ffmpeg.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons-8/F/Ffmpeg')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ffmpeg
include('simpleicons-8/F/Ffmpeg')

' renders the element
Ffmpeg('Ffmpeg', 'Ffmpeg', 'an optional tech label', 'an optional description')
@enduml
```

