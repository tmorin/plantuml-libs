# ArrowsSpin


```text
fontawesome/Solid/ArrowsSpin
```

```text
include('fontawesome/Solid/ArrowsSpin')
```



| Illustration | ArrowsSpin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsSpin.png) | ![illustration for ArrowsSpin](../../fontawesome/Solid/ArrowsSpin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsSpinXs>`
- `<$ArrowsSpinSm>`
- `<$ArrowsSpinMd>`
- `<$ArrowsSpinLg>`





## ArrowsSpin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsSpin
include('fontawesome/Solid/ArrowsSpin')

' renders the element
ArrowsSpin('ArrowsSpin', 'Arrows Spin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsSpin
include('fontawesome/Solid/ArrowsSpin')

' renders the element
ArrowsSpin('ArrowsSpin', 'Arrows Spin', 'an optional tech label', 'an optional description')
@enduml
```

