# Penpot


```text
simpleicons/P/Penpot
```

```text
include('simpleicons/P/Penpot')
```



| Illustration | Penpot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Penpot.png) | ![illustration for Penpot](../../simpleicons/P/Penpot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenpotXs>`
- `<$PenpotSm>`
- `<$PenpotMd>`
- `<$PenpotLg>`





## Penpot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Penpot
include('simpleicons/P/Penpot')

' renders the element
Penpot('Penpot', 'Penpot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Penpot
include('simpleicons/P/Penpot')

' renders the element
Penpot('Penpot', 'Penpot', 'an optional tech label', 'an optional description')
@enduml
```

