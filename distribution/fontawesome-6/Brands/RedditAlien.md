# RedditAlien


```text
fontawesome-6/Brands/RedditAlien
```

```text
include('fontawesome-6/Brands/RedditAlien')
```



| Illustration | RedditAlien |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/RedditAlien.png) | ![illustration for RedditAlien](../../fontawesome-6/Brands/RedditAlien.Local.png) |




## RedditAlien

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RedditAlien
include('fontawesome-6/Brands/RedditAlien')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RedditAlien
include('fontawesome-6/Brands/RedditAlien')

' renders the element
RedditAlien('RedditAlien', 'Reddit Alien', 'an optional tech label')
@enduml
```

