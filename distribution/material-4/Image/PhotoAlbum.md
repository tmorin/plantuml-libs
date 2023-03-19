# PhotoAlbum


```text
material-4/Image/PhotoAlbum
```

```text
include('material-4/Image/PhotoAlbum')
```



| Illustration | PhotoAlbum |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoAlbum.png) | ![illustration for PhotoAlbum](../../material-4/Image/PhotoAlbum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoAlbumXs>`
- `<$PhotoAlbumSm>`
- `<$PhotoAlbumMd>`
- `<$PhotoAlbumLg>`





## PhotoAlbum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoAlbum
include('material-4/Image/PhotoAlbum')

' renders the element
PhotoAlbum('PhotoAlbum', 'Photo Album', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhotoAlbum
include('material-4/Image/PhotoAlbum')

' renders the element
PhotoAlbum('PhotoAlbum', 'Photo Album', 'an optional tech label', 'an optional description')
@enduml
```

