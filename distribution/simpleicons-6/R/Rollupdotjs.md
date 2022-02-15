# Rollupdotjs


```text
simpleicons-6/R/Rollupdotjs
```

```text
include('simpleicons-6/R/Rollupdotjs')
```



| Illustration | Rollupdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rollupdotjs.png) | ![illustration for Rollupdotjs](../../simpleicons-6/R/Rollupdotjs.Local.png) |




## Rollupdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-6/R/Rollupdotjs')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rollupdotjs
include('simpleicons-6/R/Rollupdotjs')

' renders the element
Rollupdotjs('Rollupdotjs', 'Rollupdotjs', 'an optional tech label')
@enduml
```

