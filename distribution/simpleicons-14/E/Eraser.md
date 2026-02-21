# Eraser


```text
simpleicons-14/E/Eraser
```

```text
include('simpleicons-14/E/Eraser')
```



| Illustration | Eraser |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Eraser.png) | ![illustration for Eraser](../../simpleicons-14/E/Eraser.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eraser
include('simpleicons-14/E/Eraser')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Eraser
include('simpleicons-14/E/Eraser')

' renders the element
Eraser('Eraser', 'Eraser', 'an optional tech label', 'an optional description')
@enduml
```

