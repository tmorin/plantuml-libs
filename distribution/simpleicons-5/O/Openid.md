# Openid


```text
simpleicons-5/O/Openid
```

```text
include('simpleicons-5/O/Openid')
```



| Illustration | Openid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openid.png) | ![illustration for Openid](../../simpleicons-5/O/Openid.Local.png) |




## Openid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openid
include('simpleicons-5/O/Openid')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openid
include('simpleicons-5/O/Openid')

' renders the element
Openid('Openid', 'Openid', 'an optional tech label')
@enduml
```

