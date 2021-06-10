# CloudSun


```text
fontawesome-5/Solid/CloudSun
```

```text
include('fontawesome-5/Solid/CloudSun')
```



| Illustration | CloudSun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudSun.png) | ![illustration for CloudSun](../../fontawesome-5/Solid/CloudSun.Local.png) |




## CloudSun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudSun
include('fontawesome-5/Solid/CloudSun')

' renders the element
CloudSun('CloudSun', 'Cloud Sun', 'an optional tech label')
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

' loads the Item which embeds the element CloudSun
include('fontawesome-5/Solid/CloudSun')

' renders the element
CloudSun('CloudSun', 'Cloud Sun', 'an optional tech label')
@enduml
```

