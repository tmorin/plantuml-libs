# Actigraph


```text
simpleicons/A/Actigraph
```

```text
include('simpleicons/A/Actigraph')
```



| Illustration | Actigraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Actigraph.png) | ![illustration for Actigraph](../../simpleicons/A/Actigraph.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ActigraphXs>`
- `<$ActigraphSm>`
- `<$ActigraphMd>`
- `<$ActigraphLg>`





## Actigraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Actigraph
include('simpleicons/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label', 'an optional description')
@enduml
```

