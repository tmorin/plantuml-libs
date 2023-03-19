# NextPlan


```text
material-4/Action/NextPlan
```

```text
include('material-4/Action/NextPlan')
```



| Illustration | NextPlan |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/NextPlan.png) | ![illustration for NextPlan](../../material-4/Action/NextPlan.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element NextPlan
include('material-4/Action/NextPlan')

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
include('material-4/bootstrap')

' loads the Item which embeds the element NextPlan
include('material-4/Action/NextPlan')

' renders the element
NextPlan('NextPlan', 'Next Plan', 'an optional tech label', 'an optional description')
@enduml
```

