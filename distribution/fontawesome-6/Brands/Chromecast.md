# Chromecast


```text
fontawesome-6/Brands/Chromecast
```

```text
include('fontawesome-6/Brands/Chromecast')
```



| Illustration | Chromecast |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Chromecast.png) | ![illustration for Chromecast](../../fontawesome-6/Brands/Chromecast.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Chromecast
include('fontawesome-6/Brands/Chromecast')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Chromecast
include('fontawesome-6/Brands/Chromecast')

' renders the element
Chromecast('Chromecast', 'Chromecast', 'an optional tech label', 'an optional description')
@enduml
```

