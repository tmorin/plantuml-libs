# MoreVert


```text
material/Navigation/MoreVert
```

```text
include('material/Navigation/MoreVert')
```



| Illustration | MoreVert |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/MoreVert.png) | ![illustration for MoreVert](../../material/Navigation/MoreVert.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoreVertXs>`
- `<$MoreVertSm>`
- `<$MoreVertMd>`
- `<$MoreVertLg>`





## MoreVert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MoreVert
include('material/Navigation/MoreVert')

' renders the element
MoreVert('MoreVert', 'More Vert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoreVert
include('material/Navigation/MoreVert')

' renders the element
MoreVert('MoreVert', 'More Vert', 'an optional tech label', 'an optional description')
@enduml
```

