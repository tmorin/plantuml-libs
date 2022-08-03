# Revealdotjs


```text
simpleicons-7/R/Revealdotjs
```

```text
include('simpleicons-7/R/Revealdotjs')
```



| Illustration | Revealdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Revealdotjs.png) | ![illustration for Revealdotjs](../../simpleicons-7/R/Revealdotjs.Local.png) |




## Revealdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Revealdotjs
include('simpleicons-7/R/Revealdotjs')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Revealdotjs
include('simpleicons-7/R/Revealdotjs')

' renders the element
Revealdotjs('Revealdotjs', 'Revealdotjs', 'an optional tech label')
@enduml
```
