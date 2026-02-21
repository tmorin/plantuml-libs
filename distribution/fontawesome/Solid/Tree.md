# Tree


```text
fontawesome/Solid/Tree
```

```text
include('fontawesome/Solid/Tree')
```



| Illustration | Tree |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tree.png) | ![illustration for Tree](../../fontawesome/Solid/Tree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TreeXs>`
- `<$TreeSm>`
- `<$TreeMd>`
- `<$TreeLg>`





## Tree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tree
include('fontawesome/Solid/Tree')

' renders the element
Tree('Tree', 'Tree', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tree
include('fontawesome/Solid/Tree')

' renders the element
Tree('Tree', 'Tree', 'an optional tech label', 'an optional description')
@enduml
```

