# CloudSunRain


```text
fontawesome-6/Solid/CloudSunRain
```

```text
include('fontawesome-6/Solid/CloudSunRain')
```



| Illustration | CloudSunRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudSunRain.png) | ![illustration for CloudSunRain](../../fontawesome-6/Solid/CloudSunRain.Local.png) |




## CloudSunRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudSunRain
include('fontawesome-6/Solid/CloudSunRain')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudSunRain
include('fontawesome-6/Solid/CloudSunRain')

' renders the element
CloudSunRain('CloudSunRain', 'Cloud Sun Rain', 'an optional tech label', 'an optional description')
@enduml
```

