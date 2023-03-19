# ChartBar


```text
fontawesome-6/Regular/ChartBar
```

```text
include('fontawesome-6/Regular/ChartBar')
```



| Illustration | ChartBar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/ChartBar.png) | ![illustration for ChartBar](../../fontawesome-6/Regular/ChartBar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChartBarXs>`
- `<$ChartBarSm>`
- `<$ChartBarMd>`
- `<$ChartBarLg>`





## ChartBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ChartBar
include('fontawesome-6/Regular/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChartBar
include('fontawesome-6/Regular/ChartBar')

' renders the element
ChartBar('ChartBar', 'Chart Bar', 'an optional tech label', 'an optional description')
@enduml
```

