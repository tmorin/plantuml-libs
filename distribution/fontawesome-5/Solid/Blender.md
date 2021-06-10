# Blender


```text
fontawesome-5/Solid/Blender
```

```text
include('fontawesome-5/Solid/Blender')
```



| Illustration | Blender |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Blender.png) | ![illustration for Blender](../../fontawesome-5/Solid/Blender.Local.png) |




## Blender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Blender
include('fontawesome-5/Solid/Blender')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Blender
include('fontawesome-5/Solid/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label')
@enduml
```

