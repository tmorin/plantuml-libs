# HackerNews


```text
fontawesome-6/Brands/HackerNews
```

```text
include('fontawesome-6/Brands/HackerNews')
```



| Illustration | HackerNews |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/HackerNews.png) | ![illustration for HackerNews](../../fontawesome-6/Brands/HackerNews.Local.png) |




## HackerNews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HackerNews
include('fontawesome-6/Brands/HackerNews')

' renders the element
HackerNews('HackerNews', 'Hacker News', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HackerNews
include('fontawesome-6/Brands/HackerNews')

' renders the element
HackerNews('HackerNews', 'Hacker News', 'an optional tech label', 'an optional description')
@enduml
```

