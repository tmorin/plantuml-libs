# Pcgamingwiki


```text
simpleicons-14/P/Pcgamingwiki
```

```text
include('simpleicons-14/P/Pcgamingwiki')
```



| Illustration | Pcgamingwiki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pcgamingwiki.png) | ![illustration for Pcgamingwiki](../../simpleicons-14/P/Pcgamingwiki.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PcgamingwikiXs>`
- `<$PcgamingwikiSm>`
- `<$PcgamingwikiMd>`
- `<$PcgamingwikiLg>`





## Pcgamingwiki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pcgamingwiki
include('simpleicons-14/P/Pcgamingwiki')

' renders the element
Pcgamingwiki('Pcgamingwiki', 'Pcgamingwiki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pcgamingwiki
include('simpleicons-14/P/Pcgamingwiki')

' renders the element
Pcgamingwiki('Pcgamingwiki', 'Pcgamingwiki', 'an optional tech label', 'an optional description')
@enduml
```

