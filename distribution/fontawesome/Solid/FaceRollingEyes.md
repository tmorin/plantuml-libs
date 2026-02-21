# FaceRollingEyes


```text
fontawesome/Solid/FaceRollingEyes
```

```text
include('fontawesome/Solid/FaceRollingEyes')
```



| Illustration | FaceRollingEyes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceRollingEyes.png) | ![illustration for FaceRollingEyes](../../fontawesome/Solid/FaceRollingEyes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceRollingEyesXs>`
- `<$FaceRollingEyesSm>`
- `<$FaceRollingEyesMd>`
- `<$FaceRollingEyesLg>`





## FaceRollingEyes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceRollingEyes
include('fontawesome/Solid/FaceRollingEyes')

' renders the element
FaceRollingEyes('FaceRollingEyes', 'Face Rolling Eyes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceRollingEyes
include('fontawesome/Solid/FaceRollingEyes')

' renders the element
FaceRollingEyes('FaceRollingEyes', 'Face Rolling Eyes', 'an optional tech label', 'an optional description')
@enduml
```

