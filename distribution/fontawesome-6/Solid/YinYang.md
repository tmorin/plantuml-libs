# YinYang


```text
fontawesome-6/Solid/YinYang
```

```text
include('fontawesome-6/Solid/YinYang')
```



| Illustration | YinYang |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/YinYang.png) | ![illustration for YinYang](../../fontawesome-6/Solid/YinYang.Local.png) |




## YinYang

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element YinYang
include('fontawesome-6/Solid/YinYang')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element YinYang
include('fontawesome-6/Solid/YinYang')

' renders the element
YinYang('YinYang', 'Yin Yang', 'an optional tech label')
@enduml
```

