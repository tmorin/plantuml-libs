# Backbonedotjs


```text
simpleicons-7/B/Backbonedotjs
```

```text
include('simpleicons-7/B/Backbonedotjs')
```



| Illustration | Backbonedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Backbonedotjs.png) | ![illustration for Backbonedotjs](../../simpleicons-7/B/Backbonedotjs.Local.png) |




## Backbonedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Backbonedotjs
include('simpleicons-7/B/Backbonedotjs')

' renders the element
Backbonedotjs('Backbonedotjs', 'Backbonedotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backbonedotjs
include('simpleicons-7/B/Backbonedotjs')

' renders the element
Backbonedotjs('Backbonedotjs', 'Backbonedotjs', 'an optional tech label', 'an optional description')
@enduml
```

