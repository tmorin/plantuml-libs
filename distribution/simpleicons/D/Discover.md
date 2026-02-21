# Discover


```text
simpleicons/D/Discover
```

```text
include('simpleicons/D/Discover')
```



| Illustration | Discover |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Discover.png) | ![illustration for Discover](../../simpleicons/D/Discover.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiscoverXs>`
- `<$DiscoverSm>`
- `<$DiscoverMd>`
- `<$DiscoverLg>`





## Discover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Discover
include('simpleicons/D/Discover')

' renders the element
Discover('Discover', 'Discover', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Discover
include('simpleicons/D/Discover')

' renders the element
Discover('Discover', 'Discover', 'an optional tech label', 'an optional description')
@enduml
```

