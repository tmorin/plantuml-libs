# TumblrSquare


```text
fontawesome-5/Brands/TumblrSquare
```

```text
include('fontawesome-5/Brands/TumblrSquare')
```



| Illustration | TumblrSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/TumblrSquare.png) | ![illustration for TumblrSquare](../../fontawesome-5/Brands/TumblrSquare.Local.png) |




## TumblrSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TumblrSquare
include('fontawesome-5/Brands/TumblrSquare')

' renders the element
TumblrSquare('TumblrSquare', 'Tumblr Square', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TumblrSquare
include('fontawesome-5/Brands/TumblrSquare')

' renders the element
TumblrSquare('TumblrSquare', 'Tumblr Square', 'an optional tech label')
@enduml
```

