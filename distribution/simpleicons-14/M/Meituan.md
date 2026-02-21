# Meituan


```text
simpleicons-14/M/Meituan
```

```text
include('simpleicons-14/M/Meituan')
```



| Illustration | Meituan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Meituan.png) | ![illustration for Meituan](../../simpleicons-14/M/Meituan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeituanXs>`
- `<$MeituanSm>`
- `<$MeituanMd>`
- `<$MeituanLg>`





## Meituan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meituan
include('simpleicons-14/M/Meituan')

' renders the element
Meituan('Meituan', 'Meituan', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meituan
include('simpleicons-14/M/Meituan')

' renders the element
Meituan('Meituan', 'Meituan', 'an optional tech label', 'an optional description')
@enduml
```

