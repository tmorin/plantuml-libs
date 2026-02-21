# Zotero


```text
simpleicons/Z/Zotero
```

```text
include('simpleicons/Z/Zotero')
```



| Illustration | Zotero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zotero.png) | ![illustration for Zotero](../../simpleicons/Z/Zotero.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZoteroXs>`
- `<$ZoteroSm>`
- `<$ZoteroMd>`
- `<$ZoteroLg>`





## Zotero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zotero
include('simpleicons/Z/Zotero')

' renders the element
Zotero('Zotero', 'Zotero', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zotero
include('simpleicons/Z/Zotero')

' renders the element
Zotero('Zotero', 'Zotero', 'an optional tech label', 'an optional description')
@enduml
```

