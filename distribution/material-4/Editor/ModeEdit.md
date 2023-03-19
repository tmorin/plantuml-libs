# ModeEdit


```text
material-4/Editor/ModeEdit
```

```text
include('material-4/Editor/ModeEdit')
```



| Illustration | ModeEdit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/ModeEdit.png) | ![illustration for ModeEdit](../../material-4/Editor/ModeEdit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModeEditXs>`
- `<$ModeEditSm>`
- `<$ModeEditMd>`
- `<$ModeEditLg>`





## ModeEdit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ModeEdit
include('material-4/Editor/ModeEdit')

' renders the element
ModeEdit('ModeEdit', 'Mode Edit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ModeEdit
include('material-4/Editor/ModeEdit')

' renders the element
ModeEdit('ModeEdit', 'Mode Edit', 'an optional tech label', 'an optional description')
@enduml
```

