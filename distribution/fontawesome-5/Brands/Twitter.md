# Twitter


```text
fontawesome-5/Brands/Twitter
```

```text
include('fontawesome-5/Brands/Twitter')
```



| Illustration | Twitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Twitter.png) | ![illustration for Twitter](../../fontawesome-5/Brands/Twitter.Local.png) |




## Twitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Twitter
include('fontawesome-5/Brands/Twitter')

' renders the element
Twitter('Twitter', 'Twitter', 'an optional tech label')
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

' loads the Item which embeds the element Twitter
include('fontawesome-5/Brands/Twitter')

' renders the element
Twitter('Twitter', 'Twitter', 'an optional tech label')
@enduml
```

