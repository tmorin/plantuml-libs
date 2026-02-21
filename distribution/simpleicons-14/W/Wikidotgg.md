# Wikidotgg


```text
simpleicons-14/W/Wikidotgg
```

```text
include('simpleicons-14/W/Wikidotgg')
```



| Illustration | Wikidotgg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wikidotgg.png) | ![illustration for Wikidotgg](../../simpleicons-14/W/Wikidotgg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikidotggXs>`
- `<$WikidotggSm>`
- `<$WikidotggMd>`
- `<$WikidotggLg>`





## Wikidotgg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wikidotgg
include('simpleicons-14/W/Wikidotgg')

' renders the element
Wikidotgg('Wikidotgg', 'Wikidotgg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikidotgg
include('simpleicons-14/W/Wikidotgg')

' renders the element
Wikidotgg('Wikidotgg', 'Wikidotgg', 'an optional tech label', 'an optional description')
@enduml
```

