# ArrowDownward


```text
material/Navigation/ArrowDownward
```

```text
include('material/Navigation/ArrowDownward')
```



| Illustration | ArrowDownward |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/ArrowDownward.png) | ![illustration for ArrowDownward](../../material/Navigation/ArrowDownward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowDownwardXs>`
- `<$ArrowDownwardSm>`
- `<$ArrowDownwardMd>`
- `<$ArrowDownwardLg>`





## ArrowDownward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ArrowDownward
include('material/Navigation/ArrowDownward')

' renders the element
ArrowDownward('ArrowDownward', 'Arrow Downward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDownward
include('material/Navigation/ArrowDownward')

' renders the element
ArrowDownward('ArrowDownward', 'Arrow Downward', 'an optional tech label', 'an optional description')
@enduml
```

