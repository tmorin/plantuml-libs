# OpenInBrowser


```text
material/Action/OpenInBrowser
```

```text
include('material/Action/OpenInBrowser')
```



| Illustration | OpenInBrowser |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/OpenInBrowser.png) | ![illustration for OpenInBrowser](../../material/Action/OpenInBrowser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenInBrowserXs>`
- `<$OpenInBrowserSm>`
- `<$OpenInBrowserMd>`
- `<$OpenInBrowserLg>`





## OpenInBrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OpenInBrowser
include('material/Action/OpenInBrowser')

' renders the element
OpenInBrowser('OpenInBrowser', 'Open In Browser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OpenInBrowser
include('material/Action/OpenInBrowser')

' renders the element
OpenInBrowser('OpenInBrowser', 'Open In Browser', 'an optional tech label', 'an optional description')
@enduml
```

