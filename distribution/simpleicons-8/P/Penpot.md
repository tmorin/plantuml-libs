# Penpot


```text
simpleicons-8/P/Penpot
```

```text
include('simpleicons-8/P/Penpot')
```



| Illustration | Penpot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Penpot.png) | ![illustration for Penpot](../../simpleicons-8/P/Penpot.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Penpot
include('simpleicons-8/P/Penpot')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Penpot
include('simpleicons-8/P/Penpot')

' renders the element
Penpot('Penpot', 'Penpot', 'an optional tech label', 'an optional description')
@enduml
```

