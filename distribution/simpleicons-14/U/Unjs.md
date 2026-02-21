# Unjs


```text
simpleicons-14/U/Unjs
```

```text
include('simpleicons-14/U/Unjs')
```



| Illustration | Unjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Unjs.png) | ![illustration for Unjs](../../simpleicons-14/U/Unjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnjsXs>`
- `<$UnjsSm>`
- `<$UnjsMd>`
- `<$UnjsLg>`





## Unjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Unjs
include('simpleicons-14/U/Unjs')

' renders the element
Unjs('Unjs', 'Unjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unjs
include('simpleicons-14/U/Unjs')

' renders the element
Unjs('Unjs', 'Unjs', 'an optional tech label', 'an optional description')
@enduml
```

