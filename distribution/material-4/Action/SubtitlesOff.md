# SubtitlesOff


```text
material-4/Action/SubtitlesOff
```

```text
include('material-4/Action/SubtitlesOff')
```



| Illustration | SubtitlesOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SubtitlesOff.png) | ![illustration for SubtitlesOff](../../material-4/Action/SubtitlesOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SubtitlesOffXs>`
- `<$SubtitlesOffSm>`
- `<$SubtitlesOffMd>`
- `<$SubtitlesOffLg>`





## SubtitlesOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SubtitlesOff
include('material-4/Action/SubtitlesOff')

' renders the element
SubtitlesOff('SubtitlesOff', 'Subtitles Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SubtitlesOff
include('material-4/Action/SubtitlesOff')

' renders the element
SubtitlesOff('SubtitlesOff', 'Subtitles Off', 'an optional tech label', 'an optional description')
@enduml
```

