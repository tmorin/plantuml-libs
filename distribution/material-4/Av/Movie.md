# Movie


```text
material-4/Av/Movie
```

```text
include('material-4/Av/Movie')
```



| Illustration | Movie |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Movie.png) | ![illustration for Movie](../../material-4/Av/Movie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MovieXs>`
- `<$MovieSm>`
- `<$MovieMd>`
- `<$MovieLg>`





## Movie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Movie
include('material-4/Av/Movie')

' renders the element
Movie('Movie', 'Movie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Movie
include('material-4/Av/Movie')

' renders the element
Movie('Movie', 'Movie', 'an optional tech label', 'an optional description')
@enduml
```

