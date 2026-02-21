# Handlebarsdotjs


```text
simpleicons/H/Handlebarsdotjs
```

```text
include('simpleicons/H/Handlebarsdotjs')
```



| Illustration | Handlebarsdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Handlebarsdotjs.png) | ![illustration for Handlebarsdotjs](../../simpleicons/H/Handlebarsdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandlebarsdotjsXs>`
- `<$HandlebarsdotjsSm>`
- `<$HandlebarsdotjsMd>`
- `<$HandlebarsdotjsLg>`





## Handlebarsdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Handlebarsdotjs
include('simpleicons/H/Handlebarsdotjs')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Handlebarsdotjs
include('simpleicons/H/Handlebarsdotjs')

' renders the element
Handlebarsdotjs('Handlebarsdotjs', 'Handlebarsdotjs', 'an optional tech label', 'an optional description')
@enduml
```

