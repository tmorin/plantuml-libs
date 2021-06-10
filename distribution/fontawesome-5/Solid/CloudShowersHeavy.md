# CloudShowersHeavy


```text
fontawesome-5/Solid/CloudShowersHeavy
```

```text
include('fontawesome-5/Solid/CloudShowersHeavy')
```



| Illustration | CloudShowersHeavy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CloudShowersHeavy.png) | ![illustration for CloudShowersHeavy](../../fontawesome-5/Solid/CloudShowersHeavy.Local.png) |




## CloudShowersHeavy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CloudShowersHeavy
include('fontawesome-5/Solid/CloudShowersHeavy')

' renders the element
CloudShowersHeavy('CloudShowersHeavy', 'Cloud Showers Heavy', 'an optional tech label')
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

' loads the Item which embeds the element CloudShowersHeavy
include('fontawesome-5/Solid/CloudShowersHeavy')

' renders the element
CloudShowersHeavy('CloudShowersHeavy', 'Cloud Showers Heavy', 'an optional tech label')
@enduml
```

