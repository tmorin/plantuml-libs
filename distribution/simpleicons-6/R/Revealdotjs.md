# Revealdotjs


```text
simpleicons-6/R/Revealdotjs
```

```text
include('simpleicons-6/R/Revealdotjs')
```



| Illustration | Revealdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Revealdotjs.png) | ![illustration for Revealdotjs](../../simpleicons-6/R/Revealdotjs.Local.png) |




## Revealdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Revealdotjs
include('simpleicons-6/R/Revealdotjs')

' renders the element
Revealdotjs('Revealdotjs', 'Revealdotjs', 'an optional tech label')
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

' loads the Item which embeds the element Revealdotjs
include('simpleicons-6/R/Revealdotjs')

' renders the element
Revealdotjs('Revealdotjs', 'Revealdotjs', 'an optional tech label')
@enduml
```

