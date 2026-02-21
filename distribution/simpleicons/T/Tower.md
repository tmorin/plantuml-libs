# Tower


```text
simpleicons/T/Tower
```

```text
include('simpleicons/T/Tower')
```



| Illustration | Tower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tower.png) | ![illustration for Tower](../../simpleicons/T/Tower.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tower
include('simpleicons/T/Tower')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tower
include('simpleicons/T/Tower')

' renders the element
Tower('Tower', 'Tower', 'an optional tech label', 'an optional description')
@enduml
```

