# CloudMeatball


```text
fontawesome-5/Solid/CloudMeatball
```

```text
include('fontawesome-5/Solid/CloudMeatball')
```



| Illustration | CloudMeatball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudMeatball.png) | ![illustration for CloudMeatball](../../fontawesome-5/Solid/CloudMeatball.Local.png) |




## CloudMeatball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudMeatball
include('fontawesome-5/Solid/CloudMeatball')

' renders the element
CloudMeatball('CloudMeatball', 'Cloud Meatball', 'an optional tech label')
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

' loads the Item which embeds the element CloudMeatball
include('fontawesome-5/Solid/CloudMeatball')

' renders the element
CloudMeatball('CloudMeatball', 'Cloud Meatball', 'an optional tech label')
@enduml
```

