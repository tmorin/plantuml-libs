# BlenderPhone


```text
fontawesome-5/Solid/BlenderPhone
```

```text
include('fontawesome-5/Solid/BlenderPhone')
```



| Illustration | BlenderPhone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BlenderPhone.png) | ![illustration for BlenderPhone](../../fontawesome-5/Solid/BlenderPhone.Local.png) |




## BlenderPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BlenderPhone
include('fontawesome-5/Solid/BlenderPhone')

' renders the element
BlenderPhone('BlenderPhone', 'Blender Phone', 'an optional tech label')
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

' loads the Item which embeds the element BlenderPhone
include('fontawesome-5/Solid/BlenderPhone')

' renders the element
BlenderPhone('BlenderPhone', 'Blender Phone', 'an optional tech label')
@enduml
```

