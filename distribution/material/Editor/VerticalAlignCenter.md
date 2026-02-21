# VerticalAlignCenter


```text
material/Editor/VerticalAlignCenter
```

```text
include('material/Editor/VerticalAlignCenter')
```



| Illustration | VerticalAlignCenter |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/VerticalAlignCenter.png) | ![illustration for VerticalAlignCenter](../../material/Editor/VerticalAlignCenter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerticalAlignCenterXs>`
- `<$VerticalAlignCenterSm>`
- `<$VerticalAlignCenterMd>`
- `<$VerticalAlignCenterLg>`





## VerticalAlignCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VerticalAlignCenter
include('material/Editor/VerticalAlignCenter')

' renders the element
VerticalAlignCenter('VerticalAlignCenter', 'Vertical Align Center', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VerticalAlignCenter
include('material/Editor/VerticalAlignCenter')

' renders the element
VerticalAlignCenter('VerticalAlignCenter', 'Vertical Align Center', 'an optional tech label', 'an optional description')
@enduml
```

