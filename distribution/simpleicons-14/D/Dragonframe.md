# Dragonframe


```text
simpleicons-14/D/Dragonframe
```

```text
include('simpleicons-14/D/Dragonframe')
```



| Illustration | Dragonframe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dragonframe.png) | ![illustration for Dragonframe](../../simpleicons-14/D/Dragonframe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DragonframeXs>`
- `<$DragonframeSm>`
- `<$DragonframeMd>`
- `<$DragonframeLg>`





## Dragonframe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dragonframe
include('simpleicons-14/D/Dragonframe')

' renders the element
Dragonframe('Dragonframe', 'Dragonframe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dragonframe
include('simpleicons-14/D/Dragonframe')

' renders the element
Dragonframe('Dragonframe', 'Dragonframe', 'an optional tech label', 'an optional description')
@enduml
```

