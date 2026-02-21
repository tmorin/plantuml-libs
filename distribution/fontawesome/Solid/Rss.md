# Rss


```text
fontawesome/Solid/Rss
```

```text
include('fontawesome/Solid/Rss')
```



| Illustration | Rss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rss.png) | ![illustration for Rss](../../fontawesome/Solid/Rss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RssXs>`
- `<$RssSm>`
- `<$RssMd>`
- `<$RssLg>`





## Rss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rss
include('fontawesome/Solid/Rss')

' renders the element
Rss('Rss', 'Rss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rss
include('fontawesome/Solid/Rss')

' renders the element
Rss('Rss', 'Rss', 'an optional tech label', 'an optional description')
@enduml
```

