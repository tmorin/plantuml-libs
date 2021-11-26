# Koa


```text
simpleicons-5/K/Koa
```

```text
include('simpleicons-5/K/Koa')
```



| Illustration | Koa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Koa.png) | ![illustration for Koa](../../simpleicons-5/K/Koa.Local.png) |




## Koa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Koa
include('simpleicons-5/K/Koa')

' renders the element
Koa('Koa', 'Koa', 'an optional tech label')
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

' loads the Item which embeds the element Koa
include('simpleicons-5/K/Koa')

' renders the element
Koa('Koa', 'Koa', 'an optional tech label')
@enduml
```

