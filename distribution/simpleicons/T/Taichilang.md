# Taichilang


```text
simpleicons/T/Taichilang
```

```text
include('simpleicons/T/Taichilang')
```



| Illustration | Taichilang |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Taichilang.png) | ![illustration for Taichilang](../../simpleicons/T/Taichilang.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaichilangXs>`
- `<$TaichilangSm>`
- `<$TaichilangMd>`
- `<$TaichilangLg>`





## Taichilang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Taichilang
include('simpleicons/T/Taichilang')

' renders the element
Taichilang('Taichilang', 'Taichilang', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Taichilang
include('simpleicons/T/Taichilang')

' renders the element
Taichilang('Taichilang', 'Taichilang', 'an optional tech label', 'an optional description')
@enduml
```

