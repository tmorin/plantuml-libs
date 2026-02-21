# Langgraph


```text
simpleicons-14/L/Langgraph
```

```text
include('simpleicons-14/L/Langgraph')
```



| Illustration | Langgraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Langgraph.png) | ![illustration for Langgraph](../../simpleicons-14/L/Langgraph.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LanggraphXs>`
- `<$LanggraphSm>`
- `<$LanggraphMd>`
- `<$LanggraphLg>`





## Langgraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Langgraph
include('simpleicons-14/L/Langgraph')

' renders the element
Langgraph('Langgraph', 'Langgraph', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Langgraph
include('simpleicons-14/L/Langgraph')

' renders the element
Langgraph('Langgraph', 'Langgraph', 'an optional tech label', 'an optional description')
@enduml
```

