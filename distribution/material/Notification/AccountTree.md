# AccountTree


```text
material/Notification/AccountTree
```

```text
include('material/Notification/AccountTree')
```



| Illustration | AccountTree |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/AccountTree.png) | ![illustration for AccountTree](../../material/Notification/AccountTree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccountTreeXs>`
- `<$AccountTreeSm>`
- `<$AccountTreeMd>`
- `<$AccountTreeLg>`





## AccountTree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AccountTree
include('material/Notification/AccountTree')

' renders the element
AccountTree('AccountTree', 'Account Tree', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AccountTree
include('material/Notification/AccountTree')

' renders the element
AccountTree('AccountTree', 'Account Tree', 'an optional tech label', 'an optional description')
@enduml
```

