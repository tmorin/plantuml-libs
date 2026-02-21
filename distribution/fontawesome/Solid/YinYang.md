# YinYang


```text
fontawesome/Solid/YinYang
```

```text
include('fontawesome/Solid/YinYang')
```



| Illustration | YinYang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/YinYang.png) | ![illustration for YinYang](../../fontawesome/Solid/YinYang.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YinYangXs>`
- `<$YinYangSm>`
- `<$YinYangMd>`
- `<$YinYangLg>`





## YinYang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element YinYang
include('fontawesome/Solid/YinYang')

' renders the element
YinYang('YinYang', 'Yin Yang', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element YinYang
include('fontawesome/Solid/YinYang')

' renders the element
YinYang('YinYang', 'Yin Yang', 'an optional tech label', 'an optional description')
@enduml
```

