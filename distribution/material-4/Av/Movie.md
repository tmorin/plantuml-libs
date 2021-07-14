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




## Movie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Movie
include('material-4/Av/Movie')

' renders the element
Movie('Movie', 'Movie', 'an optional tech label')
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
Movie('Movie', 'Movie', 'an optional tech label')
@enduml
```

