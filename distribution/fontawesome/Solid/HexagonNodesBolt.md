# HexagonNodesBolt


```text
fontawesome/Solid/HexagonNodesBolt
```

```text
include('fontawesome/Solid/HexagonNodesBolt')
```



| Illustration | HexagonNodesBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HexagonNodesBolt.png) | ![illustration for HexagonNodesBolt](../../fontawesome/Solid/HexagonNodesBolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HexagonNodesBoltXs>`
- `<$HexagonNodesBoltSm>`
- `<$HexagonNodesBoltMd>`
- `<$HexagonNodesBoltLg>`





## HexagonNodesBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HexagonNodesBolt
include('fontawesome/Solid/HexagonNodesBolt')

' renders the element
HexagonNodesBolt('HexagonNodesBolt', 'Hexagon Nodes Bolt', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HexagonNodesBolt
include('fontawesome/Solid/HexagonNodesBolt')

' renders the element
HexagonNodesBolt('HexagonNodesBolt', 'Hexagon Nodes Bolt', 'an optional tech label', 'an optional description')
@enduml
```

