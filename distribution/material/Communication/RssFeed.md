# RssFeed


```text
material/Communication/RssFeed
```

```text
include('material/Communication/RssFeed')
```



| Illustration | RssFeed |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/RssFeed.png) | ![illustration for RssFeed](../../material/Communication/RssFeed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RssFeedXs>`
- `<$RssFeedSm>`
- `<$RssFeedMd>`
- `<$RssFeedLg>`





## RssFeed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RssFeed
include('material/Communication/RssFeed')

' renders the element
RssFeed('RssFeed', 'Rss Feed', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element RssFeed
include('material/Communication/RssFeed')

' renders the element
RssFeed('RssFeed', 'Rss Feed', 'an optional tech label', 'an optional description')
@enduml
```

