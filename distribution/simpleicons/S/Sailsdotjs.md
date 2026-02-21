# Sailsdotjs


```text
simpleicons/S/Sailsdotjs
```

```text
include('simpleicons/S/Sailsdotjs')
```



| Illustration | Sailsdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sailsdotjs.png) | ![illustration for Sailsdotjs](../../simpleicons/S/Sailsdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SailsdotjsXs>`
- `<$SailsdotjsSm>`
- `<$SailsdotjsMd>`
- `<$SailsdotjsLg>`





## Sailsdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sailsdotjs
include('simpleicons/S/Sailsdotjs')

' renders the element
Sailsdotjs('Sailsdotjs', 'Sailsdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sailsdotjs
include('simpleicons/S/Sailsdotjs')

' renders the element
Sailsdotjs('Sailsdotjs', 'Sailsdotjs', 'an optional tech label', 'an optional description')
@enduml
```

