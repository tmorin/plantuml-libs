# RedditSquare


```text
fontawesome-6/Brands/RedditSquare
```

```text
include('fontawesome-6/Brands/RedditSquare')
```



| Illustration | RedditSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/RedditSquare.png) | ![illustration for RedditSquare](../../fontawesome-6/Brands/RedditSquare.Local.png) |




## RedditSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RedditSquare
include('fontawesome-6/Brands/RedditSquare')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RedditSquare
include('fontawesome-6/Brands/RedditSquare')

' renders the element
RedditSquare('RedditSquare', 'Reddit Square', 'an optional tech label', 'an optional description')
@enduml
```

