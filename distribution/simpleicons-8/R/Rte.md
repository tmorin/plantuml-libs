# Rte


```text
simpleicons-8/R/Rte
```

```text
include('simpleicons-8/R/Rte')
```



| Illustration | Rte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rte.png) | ![illustration for Rte](../../simpleicons-8/R/Rte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RteXs>`
- `<$RteSm>`
- `<$RteMd>`
- `<$RteLg>`





## Rte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rte
include('simpleicons-8/R/Rte')

' renders the element
Rte('Rte', 'Rte', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rte
include('simpleicons-8/R/Rte')

' renders the element
Rte('Rte', 'Rte', 'an optional tech label', 'an optional description')
@enduml
```

