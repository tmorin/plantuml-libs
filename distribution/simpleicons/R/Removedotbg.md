# Removedotbg


```text
simpleicons/R/Removedotbg
```

```text
include('simpleicons/R/Removedotbg')
```



| Illustration | Removedotbg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Removedotbg.png) | ![illustration for Removedotbg](../../simpleicons/R/Removedotbg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemovedotbgXs>`
- `<$RemovedotbgSm>`
- `<$RemovedotbgMd>`
- `<$RemovedotbgLg>`





## Removedotbg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Removedotbg
include('simpleicons/R/Removedotbg')

' renders the element
Removedotbg('Removedotbg', 'Removedotbg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Removedotbg
include('simpleicons/R/Removedotbg')

' renders the element
Removedotbg('Removedotbg', 'Removedotbg', 'an optional tech label', 'an optional description')
@enduml
```

