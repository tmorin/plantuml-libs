# TorBrowser


```text
fontawesome/Brands/TorBrowser
```

```text
include('fontawesome/Brands/TorBrowser')
```



| Illustration | TorBrowser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/TorBrowser.png) | ![illustration for TorBrowser](../../fontawesome/Brands/TorBrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TorBrowserXs>`
- `<$TorBrowserSm>`
- `<$TorBrowserMd>`
- `<$TorBrowserLg>`





## TorBrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TorBrowser
include('fontawesome/Brands/TorBrowser')

' renders the element
TorBrowser('TorBrowser', 'Tor Browser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TorBrowser
include('fontawesome/Brands/TorBrowser')

' renders the element
TorBrowser('TorBrowser', 'Tor Browser', 'an optional tech label', 'an optional description')
@enduml
```

