# Underscoredotjs


```text
simpleicons/U/Underscoredotjs
```

```text
include('simpleicons/U/Underscoredotjs')
```



| Illustration | Underscoredotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Underscoredotjs.png) | ![illustration for Underscoredotjs](../../simpleicons/U/Underscoredotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnderscoredotjsXs>`
- `<$UnderscoredotjsSm>`
- `<$UnderscoredotjsMd>`
- `<$UnderscoredotjsLg>`





## Underscoredotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Underscoredotjs
include('simpleicons/U/Underscoredotjs')

' renders the element
Underscoredotjs('Underscoredotjs', 'Underscoredotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Underscoredotjs
include('simpleicons/U/Underscoredotjs')

' renders the element
Underscoredotjs('Underscoredotjs', 'Underscoredotjs', 'an optional tech label', 'an optional description')
@enduml
```

