# Cytoscapedotjs


```text
simpleicons-14/C/Cytoscapedotjs
```

```text
include('simpleicons-14/C/Cytoscapedotjs')
```



| Illustration | Cytoscapedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cytoscapedotjs.png) | ![illustration for Cytoscapedotjs](../../simpleicons-14/C/Cytoscapedotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CytoscapedotjsXs>`
- `<$CytoscapedotjsSm>`
- `<$CytoscapedotjsMd>`
- `<$CytoscapedotjsLg>`





## Cytoscapedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cytoscapedotjs
include('simpleicons-14/C/Cytoscapedotjs')

' renders the element
Cytoscapedotjs('Cytoscapedotjs', 'Cytoscapedotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cytoscapedotjs
include('simpleicons-14/C/Cytoscapedotjs')

' renders the element
Cytoscapedotjs('Cytoscapedotjs', 'Cytoscapedotjs', 'an optional tech label', 'an optional description')
@enduml
```

