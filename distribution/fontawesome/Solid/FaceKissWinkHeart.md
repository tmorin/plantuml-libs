# FaceKissWinkHeart


```text
fontawesome/Solid/FaceKissWinkHeart
```

```text
include('fontawesome/Solid/FaceKissWinkHeart')
```



| Illustration | FaceKissWinkHeart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FaceKissWinkHeart.png) | ![illustration for FaceKissWinkHeart](../../fontawesome/Solid/FaceKissWinkHeart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceKissWinkHeartXs>`
- `<$FaceKissWinkHeartSm>`
- `<$FaceKissWinkHeartMd>`
- `<$FaceKissWinkHeartLg>`





## FaceKissWinkHeart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FaceKissWinkHeart
include('fontawesome/Solid/FaceKissWinkHeart')

' renders the element
FaceKissWinkHeart('FaceKissWinkHeart', 'Face Kiss Wink Heart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FaceKissWinkHeart
include('fontawesome/Solid/FaceKissWinkHeart')

' renders the element
FaceKissWinkHeart('FaceKissWinkHeart', 'Face Kiss Wink Heart', 'an optional tech label', 'an optional description')
@enduml
```

