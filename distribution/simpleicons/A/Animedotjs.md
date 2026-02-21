# Animedotjs


```text
simpleicons/A/Animedotjs
```

```text
include('simpleicons/A/Animedotjs')
```



| Illustration | Animedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Animedotjs.png) | ![illustration for Animedotjs](../../simpleicons/A/Animedotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnimedotjsXs>`
- `<$AnimedotjsSm>`
- `<$AnimedotjsMd>`
- `<$AnimedotjsLg>`





## Animedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Animedotjs
include('simpleicons/A/Animedotjs')

' renders the element
Animedotjs('Animedotjs', 'Animedotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Animedotjs
include('simpleicons/A/Animedotjs')

' renders the element
Animedotjs('Animedotjs', 'Animedotjs', 'an optional tech label', 'an optional description')
@enduml
```

