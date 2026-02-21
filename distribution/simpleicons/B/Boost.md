# Boost


```text
simpleicons/B/Boost
```

```text
include('simpleicons/B/Boost')
```



| Illustration | Boost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Boost.png) | ![illustration for Boost](../../simpleicons/B/Boost.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoostXs>`
- `<$BoostSm>`
- `<$BoostMd>`
- `<$BoostLg>`





## Boost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Boost
include('simpleicons/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boost
include('simpleicons/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label', 'an optional description')
@enduml
```

