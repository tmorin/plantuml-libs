# Legacygames


```text
simpleicons/L/Legacygames
```

```text
include('simpleicons/L/Legacygames')
```



| Illustration | Legacygames |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Legacygames.png) | ![illustration for Legacygames](../../simpleicons/L/Legacygames.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LegacygamesXs>`
- `<$LegacygamesSm>`
- `<$LegacygamesMd>`
- `<$LegacygamesLg>`





## Legacygames

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Legacygames
include('simpleicons/L/Legacygames')

' renders the element
Legacygames('Legacygames', 'Legacygames', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Legacygames
include('simpleicons/L/Legacygames')

' renders the element
Legacygames('Legacygames', 'Legacygames', 'an optional tech label', 'an optional description')
@enduml
```

