# Svgdotjs


```text
simpleicons/S/Svgdotjs
```

```text
include('simpleicons/S/Svgdotjs')
```



| Illustration | Svgdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Svgdotjs.png) | ![illustration for Svgdotjs](../../simpleicons/S/Svgdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SvgdotjsXs>`
- `<$SvgdotjsSm>`
- `<$SvgdotjsMd>`
- `<$SvgdotjsLg>`





## Svgdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Svgdotjs
include('simpleicons/S/Svgdotjs')

' renders the element
Svgdotjs('Svgdotjs', 'Svgdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Svgdotjs
include('simpleicons/S/Svgdotjs')

' renders the element
Svgdotjs('Svgdotjs', 'Svgdotjs', 'an optional tech label', 'an optional description')
@enduml
```

