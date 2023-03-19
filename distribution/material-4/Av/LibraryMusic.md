# LibraryMusic


```text
material-4/Av/LibraryMusic
```

```text
include('material-4/Av/LibraryMusic')
```



| Illustration | LibraryMusic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/LibraryMusic.png) | ![illustration for LibraryMusic](../../material-4/Av/LibraryMusic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibraryMusicXs>`
- `<$LibraryMusicSm>`
- `<$LibraryMusicMd>`
- `<$LibraryMusicLg>`





## LibraryMusic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LibraryMusic
include('material-4/Av/LibraryMusic')

' renders the element
LibraryMusic('LibraryMusic', 'Library Music', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LibraryMusic
include('material-4/Av/LibraryMusic')

' renders the element
LibraryMusic('LibraryMusic', 'Library Music', 'an optional tech label', 'an optional description')
@enduml
```

