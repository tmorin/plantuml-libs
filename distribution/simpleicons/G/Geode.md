# Geode


```text
simpleicons/G/Geode
```

```text
include('simpleicons/G/Geode')
```



| Illustration | Geode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Geode.png) | ![illustration for Geode](../../simpleicons/G/Geode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeodeXs>`
- `<$GeodeSm>`
- `<$GeodeMd>`
- `<$GeodeLg>`





## Geode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Geode
include('simpleicons/G/Geode')

' renders the element
Geode('Geode', 'Geode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Geode
include('simpleicons/G/Geode')

' renders the element
Geode('Geode', 'Geode', 'an optional tech label', 'an optional description')
@enduml
```

