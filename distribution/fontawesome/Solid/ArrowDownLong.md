# ArrowDownLong


```text
fontawesome/Solid/ArrowDownLong
```

```text
include('fontawesome/Solid/ArrowDownLong')
```



| Illustration | ArrowDownLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowDownLong.png) | ![illustration for ArrowDownLong](../../fontawesome/Solid/ArrowDownLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowDownLongXs>`
- `<$ArrowDownLongSm>`
- `<$ArrowDownLongMd>`
- `<$ArrowDownLongLg>`





## ArrowDownLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowDownLong
include('fontawesome/Solid/ArrowDownLong')

' renders the element
ArrowDownLong('ArrowDownLong', 'Arrow Down Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowDownLong
include('fontawesome/Solid/ArrowDownLong')

' renders the element
ArrowDownLong('ArrowDownLong', 'Arrow Down Long', 'an optional tech label', 'an optional description')
@enduml
```

