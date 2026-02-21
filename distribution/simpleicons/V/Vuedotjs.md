# Vuedotjs


```text
simpleicons/V/Vuedotjs
```

```text
include('simpleicons/V/Vuedotjs')
```



| Illustration | Vuedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vuedotjs.png) | ![illustration for Vuedotjs](../../simpleicons/V/Vuedotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VuedotjsXs>`
- `<$VuedotjsSm>`
- `<$VuedotjsMd>`
- `<$VuedotjsLg>`





## Vuedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vuedotjs
include('simpleicons/V/Vuedotjs')

' renders the element
Vuedotjs('Vuedotjs', 'Vuedotjs', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vuedotjs
include('simpleicons/V/Vuedotjs')

' renders the element
Vuedotjs('Vuedotjs', 'Vuedotjs', 'an optional tech label', 'an optional description')
@enduml
```

