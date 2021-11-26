# Threedotjs


```text
simpleicons-5/T/Threedotjs
```

```text
include('simpleicons-5/T/Threedotjs')
```



| Illustration | Threedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Threedotjs.png) | ![illustration for Threedotjs](../../simpleicons-5/T/Threedotjs.Local.png) |




## Threedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Threedotjs
include('simpleicons-5/T/Threedotjs')

' renders the element
Threedotjs('Threedotjs', 'Threedotjs', 'an optional tech label')
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

' loads the Item which embeds the element Threedotjs
include('simpleicons-5/T/Threedotjs')

' renders the element
Threedotjs('Threedotjs', 'Threedotjs', 'an optional tech label')
@enduml
```

