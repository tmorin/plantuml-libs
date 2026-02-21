# Debridlink


```text
simpleicons/D/Debridlink
```

```text
include('simpleicons/D/Debridlink')
```



| Illustration | Debridlink |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Debridlink.png) | ![illustration for Debridlink](../../simpleicons/D/Debridlink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DebridlinkXs>`
- `<$DebridlinkSm>`
- `<$DebridlinkMd>`
- `<$DebridlinkLg>`





## Debridlink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Debridlink
include('simpleicons/D/Debridlink')

' renders the element
Debridlink('Debridlink', 'Debridlink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Debridlink
include('simpleicons/D/Debridlink')

' renders the element
Debridlink('Debridlink', 'Debridlink', 'an optional tech label', 'an optional description')
@enduml
```

