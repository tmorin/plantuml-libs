# Devuan


```text
simpleicons/D/Devuan
```

```text
include('simpleicons/D/Devuan')
```



| Illustration | Devuan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Devuan.png) | ![illustration for Devuan](../../simpleicons/D/Devuan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevuanXs>`
- `<$DevuanSm>`
- `<$DevuanMd>`
- `<$DevuanLg>`





## Devuan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Devuan
include('simpleicons/D/Devuan')

' renders the element
Devuan('Devuan', 'Devuan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Devuan
include('simpleicons/D/Devuan')

' renders the element
Devuan('Devuan', 'Devuan', 'an optional tech label', 'an optional description')
@enduml
```

