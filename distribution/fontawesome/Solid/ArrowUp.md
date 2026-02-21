# ArrowUp


```text
fontawesome/Solid/ArrowUp
```

```text
include('fontawesome/Solid/ArrowUp')
```



| Illustration | ArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowUp.png) | ![illustration for ArrowUp](../../fontawesome/Solid/ArrowUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowUpXs>`
- `<$ArrowUpSm>`
- `<$ArrowUpMd>`
- `<$ArrowUpLg>`





## ArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowUp
include('fontawesome/Solid/ArrowUp')

' renders the element
ArrowUp('ArrowUp', 'Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowUp
include('fontawesome/Solid/ArrowUp')

' renders the element
ArrowUp('ArrowUp', 'Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

