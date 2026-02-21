# Movie


```text
material/Av/Movie
```

```text
include('material/Av/Movie')
```



| Illustration | Movie |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Movie.png) | ![illustration for Movie](../../material/Av/Movie.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Movie
include('material/Av/Movie')

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
include('material/bootstrap')

' loads the Item which embeds the element Movie
include('material/Av/Movie')

' renders the element
Movie('Movie', 'Movie', 'an optional tech label', 'an optional description')
@enduml
```

