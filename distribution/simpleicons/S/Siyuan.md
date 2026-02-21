# Siyuan


```text
simpleicons/S/Siyuan
```

```text
include('simpleicons/S/Siyuan')
```



| Illustration | Siyuan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Siyuan.png) | ![illustration for Siyuan](../../simpleicons/S/Siyuan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SiyuanXs>`
- `<$SiyuanSm>`
- `<$SiyuanMd>`
- `<$SiyuanLg>`





## Siyuan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Siyuan
include('simpleicons/S/Siyuan')

' renders the element
Siyuan('Siyuan', 'Siyuan', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Siyuan
include('simpleicons/S/Siyuan')

' renders the element
Siyuan('Siyuan', 'Siyuan', 'an optional tech label', 'an optional description')
@enduml
```

