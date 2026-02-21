# Standardjs


```text
simpleicons/S/Standardjs
```

```text
include('simpleicons/S/Standardjs')
```



| Illustration | Standardjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Standardjs.png) | ![illustration for Standardjs](../../simpleicons/S/Standardjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StandardjsXs>`
- `<$StandardjsSm>`
- `<$StandardjsMd>`
- `<$StandardjsLg>`





## Standardjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Standardjs
include('simpleicons/S/Standardjs')

' renders the element
Standardjs('Standardjs', 'Standardjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Standardjs
include('simpleicons/S/Standardjs')

' renders the element
Standardjs('Standardjs', 'Standardjs', 'an optional tech label', 'an optional description')
@enduml
```

