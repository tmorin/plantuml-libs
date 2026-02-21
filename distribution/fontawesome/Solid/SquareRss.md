# SquareRss


```text
fontawesome/Solid/SquareRss
```

```text
include('fontawesome/Solid/SquareRss')
```



| Illustration | SquareRss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareRss.png) | ![illustration for SquareRss](../../fontawesome/Solid/SquareRss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareRssXs>`
- `<$SquareRssSm>`
- `<$SquareRssMd>`
- `<$SquareRssLg>`





## SquareRss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareRss
include('fontawesome/Solid/SquareRss')

' renders the element
SquareRss('SquareRss', 'Square Rss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareRss
include('fontawesome/Solid/SquareRss')

' renders the element
SquareRss('SquareRss', 'Square Rss', 'an optional tech label', 'an optional description')
@enduml
```

