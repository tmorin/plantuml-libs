# Geode


```text
simpleicons-14/G/Geode
```

```text
include('simpleicons-14/G/Geode')
```



| Illustration | Geode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Geode.png) | ![illustration for Geode](../../simpleicons-14/G/Geode.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Geode
include('simpleicons-14/G/Geode')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Geode
include('simpleicons-14/G/Geode')

' renders the element
Geode('Geode', 'Geode', 'an optional tech label', 'an optional description')
@enduml
```

