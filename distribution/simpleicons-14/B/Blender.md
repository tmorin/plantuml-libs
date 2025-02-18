# Blender


```text
simpleicons-14/B/Blender
```

```text
include('simpleicons-14/B/Blender')
```



| Illustration | Blender |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Blender.png) | ![illustration for Blender](../../simpleicons-14/B/Blender.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlenderXs>`
- `<$BlenderSm>`
- `<$BlenderMd>`
- `<$BlenderLg>`





## Blender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Blender
include('simpleicons-14/B/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blender
include('simpleicons-14/B/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label', 'an optional description')
@enduml
```

