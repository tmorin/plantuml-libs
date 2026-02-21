# Sketchfab


```text
simpleicons/S/Sketchfab
```

```text
include('simpleicons/S/Sketchfab')
```



| Illustration | Sketchfab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sketchfab.png) | ![illustration for Sketchfab](../../simpleicons/S/Sketchfab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SketchfabXs>`
- `<$SketchfabSm>`
- `<$SketchfabMd>`
- `<$SketchfabLg>`





## Sketchfab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sketchfab
include('simpleicons/S/Sketchfab')

' renders the element
Sketchfab('Sketchfab', 'Sketchfab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sketchfab
include('simpleicons/S/Sketchfab')

' renders the element
Sketchfab('Sketchfab', 'Sketchfab', 'an optional tech label', 'an optional description')
@enduml
```

