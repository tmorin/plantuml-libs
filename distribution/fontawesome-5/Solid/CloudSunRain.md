# CloudSunRain


```text
fontawesome-5/Solid/CloudSunRain
```

```text
include('fontawesome-5/Solid/CloudSunRain')
```



| Illustration | CloudSunRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudSunRain.png) | ![illustration for CloudSunRain](../../fontawesome-5/Solid/CloudSunRain.Local.png) |




## CloudSunRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudSunRain
include('fontawesome-5/Solid/CloudSunRain')

' renders the element
CloudSunRain('CloudSunRain', 'Cloud Sun Rain', 'an optional tech label')
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

' loads the Item which embeds the element CloudSunRain
include('fontawesome-5/Solid/CloudSunRain')

' renders the element
CloudSunRain('CloudSunRain', 'Cloud Sun Rain', 'an optional tech label')
@enduml
```

