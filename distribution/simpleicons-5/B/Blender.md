# Blender


```text
simpleicons-5/B/Blender
```

```text
include('simpleicons-5/B/Blender')
```



| Illustration | Blender |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Blender.png) | ![illustration for Blender](../../simpleicons-5/B/Blender.Local.png) |




## Blender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Blender
include('simpleicons-5/B/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Blender
include('simpleicons-5/B/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label')
@enduml
```

