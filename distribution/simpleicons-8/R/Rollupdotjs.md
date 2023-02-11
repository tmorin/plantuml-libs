# Rollupdotjs


```text
simpleicons-8/R/Rollupdotjs
```

```text
include('simpleicons-8/R/Rollupdotjs')
```



| Illustration | Rollupdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rollupdotjs.png) | ![illustration for Rollupdotjs](../../simpleicons-8/R/Rollupdotjs.Local.png) |




## Rollupdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-8/R/Rollupdotjs')

' renders the element
Rollupdotjs('Rollupdotjs', 'Rollupdotjs', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-8/R/Rollupdotjs')

' renders the element
Rollupdotjs('Rollupdotjs', 'Rollupdotjs', 'an optional tech label', 'an optional description')
@enduml
```

