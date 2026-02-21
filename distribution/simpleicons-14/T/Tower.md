# Tower


```text
simpleicons-14/T/Tower
```

```text
include('simpleicons-14/T/Tower')
```



| Illustration | Tower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tower.png) | ![illustration for Tower](../../simpleicons-14/T/Tower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TowerXs>`
- `<$TowerSm>`
- `<$TowerMd>`
- `<$TowerLg>`





## Tower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tower
include('simpleicons-14/T/Tower')

' renders the element
Tower('Tower', 'Tower', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tower
include('simpleicons-14/T/Tower')

' renders the element
Tower('Tower', 'Tower', 'an optional tech label', 'an optional description')
@enduml
```

