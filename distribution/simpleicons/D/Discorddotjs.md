# Discorddotjs


```text
simpleicons/D/Discorddotjs
```

```text
include('simpleicons/D/Discorddotjs')
```



| Illustration | Discorddotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Discorddotjs.png) | ![illustration for Discorddotjs](../../simpleicons/D/Discorddotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiscorddotjsXs>`
- `<$DiscorddotjsSm>`
- `<$DiscorddotjsMd>`
- `<$DiscorddotjsLg>`





## Discorddotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Discorddotjs
include('simpleicons/D/Discorddotjs')

' renders the element
Discorddotjs('Discorddotjs', 'Discorddotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Discorddotjs
include('simpleicons/D/Discorddotjs')

' renders the element
Discorddotjs('Discorddotjs', 'Discorddotjs', 'an optional tech label', 'an optional description')
@enduml
```

