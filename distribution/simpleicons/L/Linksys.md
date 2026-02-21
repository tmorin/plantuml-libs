# Linksys


```text
simpleicons/L/Linksys
```

```text
include('simpleicons/L/Linksys')
```



| Illustration | Linksys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linksys.png) | ![illustration for Linksys](../../simpleicons/L/Linksys.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linksys
include('simpleicons/L/Linksys')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linksys
include('simpleicons/L/Linksys')

' renders the element
Linksys('Linksys', 'Linksys', 'an optional tech label', 'an optional description')
@enduml
```

