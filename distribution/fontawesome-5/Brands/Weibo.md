# Weibo


```text
fontawesome-5/Brands/Weibo
```

```text
include('fontawesome-5/Brands/Weibo')
```



| Illustration | Weibo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Weibo.png) | ![illustration for Weibo](../../fontawesome-5/Brands/Weibo.Local.png) |




## Weibo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Weibo
include('fontawesome-5/Brands/Weibo')

' renders the element
Weibo('Weibo', 'Weibo', 'an optional tech label')
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

' loads the Item which embeds the element Weibo
include('fontawesome-5/Brands/Weibo')

' renders the element
Weibo('Weibo', 'Weibo', 'an optional tech label')
@enduml
```

