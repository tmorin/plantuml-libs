# Linksys


```text
simpleicons-14/L/Linksys
```

```text
include('simpleicons-14/L/Linksys')
```



| Illustration | Linksys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Linksys.png) | ![illustration for Linksys](../../simpleicons-14/L/Linksys.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinksysXs>`
- `<$LinksysSm>`
- `<$LinksysMd>`
- `<$LinksysLg>`





## Linksys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Linksys
include('simpleicons-14/L/Linksys')

' renders the element
Linksys('Linksys', 'Linksys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linksys
include('simpleicons-14/L/Linksys')

' renders the element
Linksys('Linksys', 'Linksys', 'an optional tech label', 'an optional description')
@enduml
```

