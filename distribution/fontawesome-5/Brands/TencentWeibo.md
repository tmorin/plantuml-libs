# TencentWeibo


```text
fontawesome-5/Brands/TencentWeibo
```

```text
include('fontawesome-5/Brands/TencentWeibo')
```



| Illustration | TencentWeibo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/TencentWeibo.png) | ![illustration for TencentWeibo](../../fontawesome-5/Brands/TencentWeibo.Local.png) |




## TencentWeibo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TencentWeibo
include('fontawesome-5/Brands/TencentWeibo')

' renders the element
TencentWeibo('TencentWeibo', 'Tencent Weibo', 'an optional tech label')
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

' loads the Item which embeds the element TencentWeibo
include('fontawesome-5/Brands/TencentWeibo')

' renders the element
TencentWeibo('TencentWeibo', 'Tencent Weibo', 'an optional tech label')
@enduml
```

