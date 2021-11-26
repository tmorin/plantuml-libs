# Weixin


```text
fontawesome-5/Brands/Weixin
```

```text
include('fontawesome-5/Brands/Weixin')
```



| Illustration | Weixin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Weixin.png) | ![illustration for Weixin](../../fontawesome-5/Brands/Weixin.Local.png) |




## Weixin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Weixin
include('fontawesome-5/Brands/Weixin')

' renders the element
Weixin('Weixin', 'Weixin', 'an optional tech label')
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

' loads the Item which embeds the element Weixin
include('fontawesome-5/Brands/Weixin')

' renders the element
Weixin('Weixin', 'Weixin', 'an optional tech label')
@enduml
```

