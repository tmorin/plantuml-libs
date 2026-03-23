# PaintBrush


```text
fontawesome/Solid/PaintBrush
```

```text
include('fontawesome/Solid/PaintBrush')
```



| Illustration | PaintBrush |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PaintBrush.png) | ![illustration for PaintBrush](../../fontawesome/Solid/PaintBrush.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaintBrushXs>`
- `<$PaintBrushSm>`
- `<$PaintBrushMd>`
- `<$PaintBrushLg>`





## PaintBrush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PaintBrush
include('fontawesome/Solid/PaintBrush')

' renders the element
PaintBrush('PaintBrush', 'Paint Brush', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PaintBrush
include('fontawesome/Solid/PaintBrush')

' renders the element
PaintBrush('PaintBrush', 'Paint Brush', 'an optional tech label', 'an optional description')
@enduml
```

