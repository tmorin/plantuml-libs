# Hexo


```text
simpleicons-8/H/Hexo
```

```text
include('simpleicons-8/H/Hexo')
```



| Illustration | Hexo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hexo.png) | ![illustration for Hexo](../../simpleicons-8/H/Hexo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HexoXs>`
- `<$HexoSm>`
- `<$HexoMd>`
- `<$HexoLg>`





## Hexo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hexo
include('simpleicons-8/H/Hexo')

' renders the element
Hexo('Hexo', 'Hexo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hexo
include('simpleicons-8/H/Hexo')

' renders the element
Hexo('Hexo', 'Hexo', 'an optional tech label', 'an optional description')
@enduml
```

