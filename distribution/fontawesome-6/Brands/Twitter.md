# Twitter


```text
fontawesome-6/Brands/Twitter
```

```text
include('fontawesome-6/Brands/Twitter')
```



| Illustration | Twitter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Twitter.png) | ![illustration for Twitter](../../fontawesome-6/Brands/Twitter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TwitterXs>`
- `<$TwitterSm>`
- `<$TwitterMd>`
- `<$TwitterLg>`





## Twitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Twitter
include('fontawesome-6/Brands/Twitter')

' renders the element
Twitter('Twitter', 'Twitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Twitter
include('fontawesome-6/Brands/Twitter')

' renders the element
Twitter('Twitter', 'Twitter', 'an optional tech label', 'an optional description')
@enduml
```

