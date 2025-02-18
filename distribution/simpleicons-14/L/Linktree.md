# Linktree


```text
simpleicons-14/L/Linktree
```

```text
include('simpleicons-14/L/Linktree')
```



| Illustration | Linktree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Linktree.png) | ![illustration for Linktree](../../simpleicons-14/L/Linktree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinktreeXs>`
- `<$LinktreeSm>`
- `<$LinktreeMd>`
- `<$LinktreeLg>`





## Linktree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linktree
include('simpleicons-14/L/Linktree')

' renders the element
Linktree('Linktree', 'Linktree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linktree
include('simpleicons-14/L/Linktree')

' renders the element
Linktree('Linktree', 'Linktree', 'an optional tech label', 'an optional description')
@enduml
```

