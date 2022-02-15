# Openid


```text
fontawesome-6/Brands/Openid
```

```text
include('fontawesome-6/Brands/Openid')
```



| Illustration | Openid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Openid.png) | ![illustration for Openid](../../fontawesome-6/Brands/Openid.Local.png) |




## Openid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Openid
include('fontawesome-6/Brands/Openid')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Openid
include('fontawesome-6/Brands/Openid')

' renders the element
Openid('Openid', 'Openid', 'an optional tech label')
@enduml
```

