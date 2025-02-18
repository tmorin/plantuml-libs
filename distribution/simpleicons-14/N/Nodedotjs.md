# Nodedotjs


```text
simpleicons-14/N/Nodedotjs
```

```text
include('simpleicons-14/N/Nodedotjs')
```



| Illustration | Nodedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nodedotjs.png) | ![illustration for Nodedotjs](../../simpleicons-14/N/Nodedotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NodedotjsXs>`
- `<$NodedotjsSm>`
- `<$NodedotjsMd>`
- `<$NodedotjsLg>`





## Nodedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nodedotjs
include('simpleicons-14/N/Nodedotjs')

' renders the element
Nodedotjs('Nodedotjs', 'Nodedotjs', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nodedotjs
include('simpleicons-14/N/Nodedotjs')

' renders the element
Nodedotjs('Nodedotjs', 'Nodedotjs', 'an optional tech label', 'an optional description')
@enduml
```

