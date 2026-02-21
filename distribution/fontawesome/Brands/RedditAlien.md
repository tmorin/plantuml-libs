# RedditAlien


```text
fontawesome/Brands/RedditAlien
```

```text
include('fontawesome/Brands/RedditAlien')
```



| Illustration | RedditAlien |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/RedditAlien.png) | ![illustration for RedditAlien](../../fontawesome/Brands/RedditAlien.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedditAlienXs>`
- `<$RedditAlienSm>`
- `<$RedditAlienMd>`
- `<$RedditAlienLg>`





## RedditAlien

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RedditAlien
include('fontawesome/Brands/RedditAlien')

' renders the element
RedditAlien('RedditAlien', 'Reddit Alien', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RedditAlien
include('fontawesome/Brands/RedditAlien')

' renders the element
RedditAlien('RedditAlien', 'Reddit Alien', 'an optional tech label', 'an optional description')
@enduml
```

