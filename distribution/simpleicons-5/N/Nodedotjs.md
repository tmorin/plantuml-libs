# Nodedotjs


```text
simpleicons-5/N/Nodedotjs
```

```text
include('simpleicons-5/N/Nodedotjs')
```



| Illustration | Nodedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nodedotjs.png) | ![illustration for Nodedotjs](../../simpleicons-5/N/Nodedotjs.Local.png) |




## Nodedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nodedotjs
include('simpleicons-5/N/Nodedotjs')

' renders the element
Nodedotjs('Nodedotjs', 'Nodedotjs', 'an optional tech label')
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

' loads the Item which embeds the element Nodedotjs
include('simpleicons-5/N/Nodedotjs')

' renders the element
Nodedotjs('Nodedotjs', 'Nodedotjs', 'an optional tech label')
@enduml
```

