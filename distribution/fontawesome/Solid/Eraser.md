# Eraser


```text
fontawesome/Solid/Eraser
```

```text
include('fontawesome/Solid/Eraser')
```



| Illustration | Eraser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Eraser.png) | ![illustration for Eraser](../../fontawesome/Solid/Eraser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EraserXs>`
- `<$EraserSm>`
- `<$EraserMd>`
- `<$EraserLg>`





## Eraser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eraser
include('fontawesome/Solid/Eraser')

' renders the element
Eraser('Eraser', 'Eraser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eraser
include('fontawesome/Solid/Eraser')

' renders the element
Eraser('Eraser', 'Eraser', 'an optional tech label', 'an optional description')
@enduml
```

