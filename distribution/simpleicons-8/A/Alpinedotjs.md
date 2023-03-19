# Alpinedotjs


```text
simpleicons-8/A/Alpinedotjs
```

```text
include('simpleicons-8/A/Alpinedotjs')
```



| Illustration | Alpinedotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Alpinedotjs.png) | ![illustration for Alpinedotjs](../../simpleicons-8/A/Alpinedotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlpinedotjsXs>`
- `<$AlpinedotjsSm>`
- `<$AlpinedotjsMd>`
- `<$AlpinedotjsLg>`





## Alpinedotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Alpinedotjs
include('simpleicons-8/A/Alpinedotjs')

' renders the element
Alpinedotjs('Alpinedotjs', 'Alpinedotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alpinedotjs
include('simpleicons-8/A/Alpinedotjs')

' renders the element
Alpinedotjs('Alpinedotjs', 'Alpinedotjs', 'an optional tech label', 'an optional description')
@enduml
```

