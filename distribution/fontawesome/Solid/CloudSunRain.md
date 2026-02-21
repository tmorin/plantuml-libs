# CloudSunRain


```text
fontawesome/Solid/CloudSunRain
```

```text
include('fontawesome/Solid/CloudSunRain')
```



| Illustration | CloudSunRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudSunRain.png) | ![illustration for CloudSunRain](../../fontawesome/Solid/CloudSunRain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudSunRainXs>`
- `<$CloudSunRainSm>`
- `<$CloudSunRainMd>`
- `<$CloudSunRainLg>`





## CloudSunRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudSunRain
include('fontawesome/Solid/CloudSunRain')

' renders the element
CloudSunRain('CloudSunRain', 'Cloud Sun Rain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudSunRain
include('fontawesome/Solid/CloudSunRain')

' renders the element
CloudSunRain('CloudSunRain', 'Cloud Sun Rain', 'an optional tech label', 'an optional description')
@enduml
```

