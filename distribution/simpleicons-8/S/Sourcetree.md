# Sourcetree


```text
simpleicons-8/S/Sourcetree
```

```text
include('simpleicons-8/S/Sourcetree')
```



| Illustration | Sourcetree |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sourcetree.png) | ![illustration for Sourcetree](../../simpleicons-8/S/Sourcetree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SourcetreeXs>`
- `<$SourcetreeSm>`
- `<$SourcetreeMd>`
- `<$SourcetreeLg>`





## Sourcetree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sourcetree
include('simpleicons-8/S/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourcetree
include('simpleicons-8/S/Sourcetree')

' renders the element
Sourcetree('Sourcetree', 'Sourcetree', 'an optional tech label', 'an optional description')
@enduml
```

