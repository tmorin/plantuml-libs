# Underscoredotjs


```text
simpleicons-5/U/Underscoredotjs
```

```text
include('simpleicons-5/U/Underscoredotjs')
```



| Illustration | Underscoredotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Underscoredotjs.png) | ![illustration for Underscoredotjs](../../simpleicons-5/U/Underscoredotjs.Local.png) |




## Underscoredotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Underscoredotjs
include('simpleicons-5/U/Underscoredotjs')

' renders the element
Underscoredotjs('Underscoredotjs', 'Underscoredotjs', 'an optional tech label')
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

' loads the Item which embeds the element Underscoredotjs
include('simpleicons-5/U/Underscoredotjs')

' renders the element
Underscoredotjs('Underscoredotjs', 'Underscoredotjs', 'an optional tech label')
@enduml
```

