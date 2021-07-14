# Alpinedotjs


```text
simpleicons-5/A/Alpinedotjs
```

```text
include('simpleicons-5/A/Alpinedotjs')
```



| Illustration | Alpinedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Alpinedotjs.png) | ![illustration for Alpinedotjs](../../simpleicons-5/A/Alpinedotjs.Local.png) |




## Alpinedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alpinedotjs
include('simpleicons-5/A/Alpinedotjs')

' renders the element
Alpinedotjs('Alpinedotjs', 'Alpinedotjs', 'an optional tech label')
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

' loads the Item which embeds the element Alpinedotjs
include('simpleicons-5/A/Alpinedotjs')

' renders the element
Alpinedotjs('Alpinedotjs', 'Alpinedotjs', 'an optional tech label')
@enduml
```

