# CloudRain


```text
fontawesome-5/Solid/CloudRain
```

```text
include('fontawesome-5/Solid/CloudRain')
```



| Illustration | CloudRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudRain.png) | ![illustration for CloudRain](../../fontawesome-5/Solid/CloudRain.Local.png) |




## CloudRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudRain
include('fontawesome-5/Solid/CloudRain')

' renders the element
CloudRain('CloudRain', 'Cloud Rain', 'an optional tech label')
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

' loads the Item which embeds the element CloudRain
include('fontawesome-5/Solid/CloudRain')

' renders the element
CloudRain('CloudRain', 'Cloud Rain', 'an optional tech label')
@enduml
```

