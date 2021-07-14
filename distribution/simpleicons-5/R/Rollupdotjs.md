# Rollupdotjs


```text
simpleicons-5/R/Rollupdotjs
```

```text
include('simpleicons-5/R/Rollupdotjs')
```



| Illustration | Rollupdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rollupdotjs.png) | ![illustration for Rollupdotjs](../../simpleicons-5/R/Rollupdotjs.Local.png) |




## Rollupdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-5/R/Rollupdotjs')

' renders the element
Rollupdotjs('Rollupdotjs', 'Rollupdotjs', 'an optional tech label')
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

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-5/R/Rollupdotjs')

' renders the element
Rollupdotjs('Rollupdotjs', 'Rollupdotjs', 'an optional tech label')
@enduml
```

