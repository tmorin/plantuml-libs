# HeartMusicCameraBolt


```text
fontawesome/Solid/HeartMusicCameraBolt
```

```text
include('fontawesome/Solid/HeartMusicCameraBolt')
```



| Illustration | HeartMusicCameraBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HeartMusicCameraBolt.png) | ![illustration for HeartMusicCameraBolt](../../fontawesome/Solid/HeartMusicCameraBolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HeartMusicCameraBoltXs>`
- `<$HeartMusicCameraBoltSm>`
- `<$HeartMusicCameraBoltMd>`
- `<$HeartMusicCameraBoltLg>`





## HeartMusicCameraBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HeartMusicCameraBolt
include('fontawesome/Solid/HeartMusicCameraBolt')

' renders the element
HeartMusicCameraBolt('HeartMusicCameraBolt', 'Heart Music Camera Bolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HeartMusicCameraBolt
include('fontawesome/Solid/HeartMusicCameraBolt')

' renders the element
HeartMusicCameraBolt('HeartMusicCameraBolt', 'Heart Music Camera Bolt', 'an optional tech label', 'an optional description')
@enduml
```

