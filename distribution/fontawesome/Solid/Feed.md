# Feed


```text
fontawesome/Solid/Feed
```

```text
include('fontawesome/Solid/Feed')
```



| Illustration | Feed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Feed.png) | ![illustration for Feed](../../fontawesome/Solid/Feed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FeedXs>`
- `<$FeedSm>`
- `<$FeedMd>`
- `<$FeedLg>`





## Feed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Feed
include('fontawesome/Solid/Feed')

' renders the element
Feed('Feed', 'Feed', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Feed
include('fontawesome/Solid/Feed')

' renders the element
Feed('Feed', 'Feed', 'an optional tech label', 'an optional description')
@enduml
```

