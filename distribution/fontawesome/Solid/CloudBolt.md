# CloudBolt


```text
fontawesome/Solid/CloudBolt
```

```text
include('fontawesome/Solid/CloudBolt')
```



| Illustration | CloudBolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudBolt.png) | ![illustration for CloudBolt](../../fontawesome/Solid/CloudBolt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudBoltXs>`
- `<$CloudBoltSm>`
- `<$CloudBoltMd>`
- `<$CloudBoltLg>`





## CloudBolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudBolt
include('fontawesome/Solid/CloudBolt')

' renders the element
CloudBolt('CloudBolt', 'Cloud Bolt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudBolt
include('fontawesome/Solid/CloudBolt')

' renders the element
CloudBolt('CloudBolt', 'Cloud Bolt', 'an optional tech label', 'an optional description')
@enduml
```

