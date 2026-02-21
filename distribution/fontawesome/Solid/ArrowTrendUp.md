# ArrowTrendUp


```text
fontawesome/Solid/ArrowTrendUp
```

```text
include('fontawesome/Solid/ArrowTrendUp')
```



| Illustration | ArrowTrendUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowTrendUp.png) | ![illustration for ArrowTrendUp](../../fontawesome/Solid/ArrowTrendUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowTrendUpXs>`
- `<$ArrowTrendUpSm>`
- `<$ArrowTrendUpMd>`
- `<$ArrowTrendUpLg>`





## ArrowTrendUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowTrendUp
include('fontawesome/Solid/ArrowTrendUp')

' renders the element
ArrowTrendUp('ArrowTrendUp', 'Arrow Trend Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowTrendUp
include('fontawesome/Solid/ArrowTrendUp')

' renders the element
ArrowTrendUp('ArrowTrendUp', 'Arrow Trend Up', 'an optional tech label', 'an optional description')
@enduml
```

