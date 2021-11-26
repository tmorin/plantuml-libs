# PaintBrush


```text
fontawesome-5/Solid/PaintBrush
```

```text
include('fontawesome-5/Solid/PaintBrush')
```



| Illustration | PaintBrush |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PaintBrush.png) | ![illustration for PaintBrush](../../fontawesome-5/Solid/PaintBrush.Local.png) |




## PaintBrush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PaintBrush
include('fontawesome-5/Solid/PaintBrush')

' renders the element
PaintBrush('PaintBrush', 'Paint Brush', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PaintBrush
include('fontawesome-5/Solid/PaintBrush')

' renders the element
PaintBrush('PaintBrush', 'Paint Brush', 'an optional tech label')
@enduml
```

