# Wikisource


```text
simpleicons/W/Wikisource
```

```text
include('simpleicons/W/Wikisource')
```



| Illustration | Wikisource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wikisource.png) | ![illustration for Wikisource](../../simpleicons/W/Wikisource.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WikisourceXs>`
- `<$WikisourceSm>`
- `<$WikisourceMd>`
- `<$WikisourceLg>`





## Wikisource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wikisource
include('simpleicons/W/Wikisource')

' renders the element
Wikisource('Wikisource', 'Wikisource', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikisource
include('simpleicons/W/Wikisource')

' renders the element
Wikisource('Wikisource', 'Wikisource', 'an optional tech label', 'an optional description')
@enduml
```

