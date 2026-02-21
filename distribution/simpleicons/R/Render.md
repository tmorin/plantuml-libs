# Render


```text
simpleicons/R/Render
```

```text
include('simpleicons/R/Render')
```



| Illustration | Render |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Render.png) | ![illustration for Render](../../simpleicons/R/Render.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RenderXs>`
- `<$RenderSm>`
- `<$RenderMd>`
- `<$RenderLg>`





## Render

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Render
include('simpleicons/R/Render')

' renders the element
Render('Render', 'Render', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Render
include('simpleicons/R/Render')

' renders the element
Render('Render', 'Render', 'an optional tech label', 'an optional description')
@enduml
```

