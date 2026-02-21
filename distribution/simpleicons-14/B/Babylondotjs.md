# Babylondotjs


```text
simpleicons-14/B/Babylondotjs
```

```text
include('simpleicons-14/B/Babylondotjs')
```



| Illustration | Babylondotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Babylondotjs.png) | ![illustration for Babylondotjs](../../simpleicons-14/B/Babylondotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BabylondotjsXs>`
- `<$BabylondotjsSm>`
- `<$BabylondotjsMd>`
- `<$BabylondotjsLg>`





## Babylondotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Babylondotjs
include('simpleicons-14/B/Babylondotjs')

' renders the element
Babylondotjs('Babylondotjs', 'Babylondotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Babylondotjs
include('simpleicons-14/B/Babylondotjs')

' renders the element
Babylondotjs('Babylondotjs', 'Babylondotjs', 'an optional tech label', 'an optional description')
@enduml
```

