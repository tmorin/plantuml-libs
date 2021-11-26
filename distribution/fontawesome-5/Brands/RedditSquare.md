# RedditSquare


```text
fontawesome-5/Brands/RedditSquare
```

```text
include('fontawesome-5/Brands/RedditSquare')
```



| Illustration | RedditSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/RedditSquare.png) | ![illustration for RedditSquare](../../fontawesome-5/Brands/RedditSquare.Local.png) |




## RedditSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RedditSquare
include('fontawesome-5/Brands/RedditSquare')

' renders the element
RedditSquare('RedditSquare', 'Reddit Square', 'an optional tech label')
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

' loads the Item which embeds the element RedditSquare
include('fontawesome-5/Brands/RedditSquare')

' renders the element
RedditSquare('RedditSquare', 'Reddit Square', 'an optional tech label')
@enduml
```

