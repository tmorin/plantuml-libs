# Nextdotjs


```text
simpleicons/N/Nextdotjs
```

```text
include('simpleicons/N/Nextdotjs')
```



| Illustration | Nextdotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nextdotjs.png) | ![illustration for Nextdotjs](../../simpleicons/N/Nextdotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NextdotjsXs>`
- `<$NextdotjsSm>`
- `<$NextdotjsMd>`
- `<$NextdotjsLg>`





## Nextdotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nextdotjs
include('simpleicons/N/Nextdotjs')

' renders the element
Nextdotjs('Nextdotjs', 'Nextdotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nextdotjs
include('simpleicons/N/Nextdotjs')

' renders the element
Nextdotjs('Nextdotjs', 'Nextdotjs', 'an optional tech label', 'an optional description')
@enduml
```

