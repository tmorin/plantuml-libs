# Blender


```text
fontawesome-6/Solid/Blender
```

```text
include('fontawesome-6/Solid/Blender')
```



| Illustration | Blender |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Blender.png) | ![illustration for Blender](../../fontawesome-6/Solid/Blender.Local.png) |




## Blender

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Blender
include('fontawesome-6/Solid/Blender')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Blender
include('fontawesome-6/Solid/Blender')

' renders the element
Blender('Blender', 'Blender', 'an optional tech label', 'an optional description')
@enduml
```

