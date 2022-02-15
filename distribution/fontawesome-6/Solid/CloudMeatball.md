# CloudMeatball


```text
fontawesome-6/Solid/CloudMeatball
```

```text
include('fontawesome-6/Solid/CloudMeatball')
```



| Illustration | CloudMeatball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudMeatball.png) | ![illustration for CloudMeatball](../../fontawesome-6/Solid/CloudMeatball.Local.png) |




## CloudMeatball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudMeatball
include('fontawesome-6/Solid/CloudMeatball')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudMeatball
include('fontawesome-6/Solid/CloudMeatball')

' renders the element
CloudMeatball('CloudMeatball', 'Cloud Meatball', 'an optional tech label')
@enduml
```

