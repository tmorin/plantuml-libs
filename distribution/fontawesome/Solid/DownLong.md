# DownLong


```text
fontawesome/Solid/DownLong
```

```text
include('fontawesome/Solid/DownLong')
```



| Illustration | DownLong |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DownLong.png) | ![illustration for DownLong](../../fontawesome/Solid/DownLong.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DownLongXs>`
- `<$DownLongSm>`
- `<$DownLongMd>`
- `<$DownLongLg>`





## DownLong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DownLong
include('fontawesome/Solid/DownLong')

' renders the element
DownLong('DownLong', 'Down Long', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DownLong
include('fontawesome/Solid/DownLong')

' renders the element
DownLong('DownLong', 'Down Long', 'an optional tech label', 'an optional description')
@enduml
```

