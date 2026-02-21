# VideoLibrary


```text
material/Av/VideoLibrary
```

```text
include('material/Av/VideoLibrary')
```



| Illustration | VideoLibrary |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/VideoLibrary.png) | ![illustration for VideoLibrary](../../material/Av/VideoLibrary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideoLibraryXs>`
- `<$VideoLibrarySm>`
- `<$VideoLibraryMd>`
- `<$VideoLibraryLg>`





## VideoLibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VideoLibrary
include('material/Av/VideoLibrary')

' renders the element
VideoLibrary('VideoLibrary', 'Video Library', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VideoLibrary
include('material/Av/VideoLibrary')

' renders the element
VideoLibrary('VideoLibrary', 'Video Library', 'an optional tech label', 'an optional description')
@enduml
```

