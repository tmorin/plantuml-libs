# Remove


```text
material-4/Content/Remove
```

```text
include('material-4/Content/Remove')
```



| Illustration | Remove |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Remove.png) | ![illustration for Remove](../../material-4/Content/Remove.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveXs>`
- `<$RemoveSm>`
- `<$RemoveMd>`
- `<$RemoveLg>`





## Remove

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Remove
include('material-4/Content/Remove')

' renders the element
Remove('Remove', 'Remove', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Remove
include('material-4/Content/Remove')

' renders the element
Remove('Remove', 'Remove', 'an optional tech label', 'an optional description')
@enduml
```

