# Thestorygraph


```text
simpleicons/T/Thestorygraph
```

```text
include('simpleicons/T/Thestorygraph')
```



| Illustration | Thestorygraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Thestorygraph.png) | ![illustration for Thestorygraph](../../simpleicons/T/Thestorygraph.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThestorygraphXs>`
- `<$ThestorygraphSm>`
- `<$ThestorygraphMd>`
- `<$ThestorygraphLg>`





## Thestorygraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Thestorygraph
include('simpleicons/T/Thestorygraph')

' renders the element
Thestorygraph('Thestorygraph', 'Thestorygraph', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Thestorygraph
include('simpleicons/T/Thestorygraph')

' renders the element
Thestorygraph('Thestorygraph', 'Thestorygraph', 'an optional tech label', 'an optional description')
@enduml
```

