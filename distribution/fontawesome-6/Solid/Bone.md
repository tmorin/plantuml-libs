# Bone


```text
fontawesome-6/Solid/Bone
```

```text
include('fontawesome-6/Solid/Bone')
```



| Illustration | Bone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bone.png) | ![illustration for Bone](../../fontawesome-6/Solid/Bone.Local.png) |




## Bone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bone
include('fontawesome-6/Solid/Bone')

' renders the element
Bone('Bone', 'Bone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bone
include('fontawesome-6/Solid/Bone')

' renders the element
Bone('Bone', 'Bone', 'an optional tech label', 'an optional description')
@enduml
```

