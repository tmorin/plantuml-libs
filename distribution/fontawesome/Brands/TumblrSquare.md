# TumblrSquare


```text
fontawesome/Brands/TumblrSquare
```

```text
include('fontawesome/Brands/TumblrSquare')
```



| Illustration | TumblrSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TumblrSquare.png) | ![illustration for TumblrSquare](../../fontawesome/Brands/TumblrSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TumblrSquareXs>`
- `<$TumblrSquareSm>`
- `<$TumblrSquareMd>`
- `<$TumblrSquareLg>`





## TumblrSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TumblrSquare
include('fontawesome/Brands/TumblrSquare')

' renders the element
TumblrSquare('TumblrSquare', 'Tumblr Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TumblrSquare
include('fontawesome/Brands/TumblrSquare')

' renders the element
TumblrSquare('TumblrSquare', 'Tumblr Square', 'an optional tech label', 'an optional description')
@enduml
```

