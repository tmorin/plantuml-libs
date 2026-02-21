# ArtTrack


```text
material/Av/ArtTrack
```

```text
include('material/Av/ArtTrack')
```



| Illustration | ArtTrack |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/ArtTrack.png) | ![illustration for ArtTrack](../../material/Av/ArtTrack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArtTrackXs>`
- `<$ArtTrackSm>`
- `<$ArtTrackMd>`
- `<$ArtTrackLg>`





## ArtTrack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArtTrack
include('material/Av/ArtTrack')

' renders the element
ArtTrack('ArtTrack', 'Art Track', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArtTrack
include('material/Av/ArtTrack')

' renders the element
ArtTrack('ArtTrack', 'Art Track', 'an optional tech label', 'an optional description')
@enduml
```

