# RedditSquare


```text
fontawesome/Brands/RedditSquare
```

```text
include('fontawesome/Brands/RedditSquare')
```



| Illustration | RedditSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/RedditSquare.png) | ![illustration for RedditSquare](../../fontawesome/Brands/RedditSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedditSquareXs>`
- `<$RedditSquareSm>`
- `<$RedditSquareMd>`
- `<$RedditSquareLg>`





## RedditSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RedditSquare
include('fontawesome/Brands/RedditSquare')

' renders the element
RedditSquare('RedditSquare', 'Reddit Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RedditSquare
include('fontawesome/Brands/RedditSquare')

' renders the element
RedditSquare('RedditSquare', 'Reddit Square', 'an optional tech label', 'an optional description')
@enduml
```

