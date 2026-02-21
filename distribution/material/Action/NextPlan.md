# NextPlan


```text
material/Action/NextPlan
```

```text
include('material/Action/NextPlan')
```



| Illustration | NextPlan |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/NextPlan.png) | ![illustration for NextPlan](../../material/Action/NextPlan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextPlanXs>`
- `<$NextPlanSm>`
- `<$NextPlanMd>`
- `<$NextPlanLg>`





## NextPlan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NextPlan
include('material/Action/NextPlan')

' renders the element
NextPlan('NextPlan', 'Next Plan', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NextPlan
include('material/Action/NextPlan')

' renders the element
NextPlan('NextPlan', 'Next Plan', 'an optional tech label', 'an optional description')
@enduml
```

