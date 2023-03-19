# Web3Dotjs


```text
simpleicons-8/W/Web3Dotjs
```

```text
include('simpleicons-8/W/Web3Dotjs')
```



| Illustration | Web3Dotjs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Web3Dotjs.png) | ![illustration for Web3Dotjs](../../simpleicons-8/W/Web3Dotjs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Web3DotjsXs>`
- `<$Web3DotjsSm>`
- `<$Web3DotjsMd>`
- `<$Web3DotjsLg>`





## Web3Dotjs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Web3Dotjs
include('simpleicons-8/W/Web3Dotjs')

' renders the element
Web3Dotjs('Web3Dotjs', 'Web3 Dotjs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Web3Dotjs
include('simpleicons-8/W/Web3Dotjs')

' renders the element
Web3Dotjs('Web3Dotjs', 'Web3 Dotjs', 'an optional tech label', 'an optional description')
@enduml
```

