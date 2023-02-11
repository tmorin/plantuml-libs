# Handlebarsdotjs


```text
simpleicons-8/H/Handlebarsdotjs
```

```text
include('simpleicons-8/H/Handlebarsdotjs')
```



| Illustration | Handlebarsdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Handlebarsdotjs.png) | ![illustration for Handlebarsdotjs](../../simpleicons-8/H/Handlebarsdotjs.Local.png) |




## Handlebarsdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Handlebarsdotjs
include('simpleicons-8/H/Handlebarsdotjs')

' renders the element
Handlebarsdotjs('Handlebarsdotjs', 'Handlebarsdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Handlebarsdotjs
include('simpleicons-8/H/Handlebarsdotjs')

' renders the element
Handlebarsdotjs('Handlebarsdotjs', 'Handlebarsdotjs', 'an optional tech label', 'an optional description')
@enduml
```

