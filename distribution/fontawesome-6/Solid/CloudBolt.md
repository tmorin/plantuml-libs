# CloudBolt


```text
fontawesome-6/Solid/CloudBolt
```

```text
include('fontawesome-6/Solid/CloudBolt')
```



| Illustration | CloudBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudBolt.png) | ![illustration for CloudBolt](../../fontawesome-6/Solid/CloudBolt.Local.png) |




## CloudBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudBolt
include('fontawesome-6/Solid/CloudBolt')

' renders the element
CloudBolt('CloudBolt', 'Cloud Bolt', 'an optional tech label')
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

' loads the Item which embeds the element CloudBolt
include('fontawesome-6/Solid/CloudBolt')

' renders the element
CloudBolt('CloudBolt', 'Cloud Bolt', 'an optional tech label')
@enduml
```

