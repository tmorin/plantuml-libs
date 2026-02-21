# Gumtree


```text
simpleicons/G/Gumtree
```

```text
include('simpleicons/G/Gumtree')
```



| Illustration | Gumtree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gumtree.png) | ![illustration for Gumtree](../../simpleicons/G/Gumtree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GumtreeXs>`
- `<$GumtreeSm>`
- `<$GumtreeMd>`
- `<$GumtreeLg>`





## Gumtree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gumtree
include('simpleicons/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gumtree
include('simpleicons/G/Gumtree')

' renders the element
Gumtree('Gumtree', 'Gumtree', 'an optional tech label', 'an optional description')
@enduml
```

