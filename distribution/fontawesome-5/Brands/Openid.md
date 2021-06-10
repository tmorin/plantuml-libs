# Openid


```text
fontawesome-5/Brands/Openid
```

```text
include('fontawesome-5/Brands/Openid')
```



| Illustration | Openid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Openid.png) | ![illustration for Openid](../../fontawesome-5/Brands/Openid.Local.png) |




## Openid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Openid
include('fontawesome-5/Brands/Openid')

' renders the element
Openid('Openid', 'Openid', 'an optional tech label')
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

' loads the Item which embeds the element Openid
include('fontawesome-5/Brands/Openid')

' renders the element
Openid('Openid', 'Openid', 'an optional tech label')
@enduml
```

