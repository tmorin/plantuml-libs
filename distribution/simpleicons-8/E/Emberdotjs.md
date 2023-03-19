# Emberdotjs


```text
simpleicons-8/E/Emberdotjs
```

```text
include('simpleicons-8/E/Emberdotjs')
```



| Illustration | Emberdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Emberdotjs.png) | ![illustration for Emberdotjs](../../simpleicons-8/E/Emberdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmberdotjsXs>`
- `<$EmberdotjsSm>`
- `<$EmberdotjsMd>`
- `<$EmberdotjsLg>`





## Emberdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Emberdotjs
include('simpleicons-8/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Emberdotjs
include('simpleicons-8/E/Emberdotjs')

' renders the element
Emberdotjs('Emberdotjs', 'Emberdotjs', 'an optional tech label', 'an optional description')
@enduml
```

