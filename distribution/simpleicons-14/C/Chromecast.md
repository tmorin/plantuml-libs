# Chromecast


```text
simpleicons-14/C/Chromecast
```

```text
include('simpleicons-14/C/Chromecast')
```



| Illustration | Chromecast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chromecast.png) | ![illustration for Chromecast](../../simpleicons-14/C/Chromecast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChromecastXs>`
- `<$ChromecastSm>`
- `<$ChromecastMd>`
- `<$ChromecastLg>`





## Chromecast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chromecast
include('simpleicons-14/C/Chromecast')

' renders the element
Chromecast('Chromecast', 'Chromecast', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chromecast
include('simpleicons-14/C/Chromecast')

' renders the element
Chromecast('Chromecast', 'Chromecast', 'an optional tech label', 'an optional description')
@enduml
```

