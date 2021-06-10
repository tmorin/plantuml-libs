# RedditAlien


```text
fontawesome-5/Brands/RedditAlien
```

```text
include('fontawesome-5/Brands/RedditAlien')
```



| Illustration | RedditAlien |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/RedditAlien.png) | ![illustration for RedditAlien](../../fontawesome-5/Brands/RedditAlien.Local.png) |




## RedditAlien

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element RedditAlien
include('fontawesome-5/Brands/RedditAlien')

' renders the element
RedditAlien('RedditAlien', 'Reddit Alien', 'an optional tech label')
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

' loads the Item which embeds the element RedditAlien
include('fontawesome-5/Brands/RedditAlien')

' renders the element
RedditAlien('RedditAlien', 'Reddit Alien', 'an optional tech label')
@enduml
```

