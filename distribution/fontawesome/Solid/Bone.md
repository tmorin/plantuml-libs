# Bone


```text
fontawesome/Solid/Bone
```

```text
include('fontawesome/Solid/Bone')
```



| Illustration | Bone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bone.png) | ![illustration for Bone](../../fontawesome/Solid/Bone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoneXs>`
- `<$BoneSm>`
- `<$BoneMd>`
- `<$BoneLg>`





## Bone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bone
include('fontawesome/Solid/Bone')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bone
include('fontawesome/Solid/Bone')

' renders the element
Bone('Bone', 'Bone', 'an optional tech label', 'an optional description')
@enduml
```

