# YinYang


```text
fontawesome-5/Solid/YinYang
```

```text
include('fontawesome-5/Solid/YinYang')
```



| Illustration | YinYang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/YinYang.png) | ![illustration for YinYang](../../fontawesome-5/Solid/YinYang.Local.png) |




## YinYang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YinYang
include('fontawesome-5/Solid/YinYang')

' renders the element
YinYang('YinYang', 'Yin Yang', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element YinYang
include('fontawesome-5/Solid/YinYang')

' renders the element
YinYang('YinYang', 'Yin Yang', 'an optional tech label')
@enduml
```

