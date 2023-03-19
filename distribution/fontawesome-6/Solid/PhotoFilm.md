# PhotoFilm


```text
fontawesome-6/Solid/PhotoFilm
```

```text
include('fontawesome-6/Solid/PhotoFilm')
```



| Illustration | PhotoFilm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PhotoFilm.png) | ![illustration for PhotoFilm](../../fontawesome-6/Solid/PhotoFilm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoFilmXs>`
- `<$PhotoFilmSm>`
- `<$PhotoFilmMd>`
- `<$PhotoFilmLg>`





## PhotoFilm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PhotoFilm
include('fontawesome-6/Solid/PhotoFilm')

' renders the element
PhotoFilm('PhotoFilm', 'Photo Film', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PhotoFilm
include('fontawesome-6/Solid/PhotoFilm')

' renders the element
PhotoFilm('PhotoFilm', 'Photo Film', 'an optional tech label', 'an optional description')
@enduml
```

