# Anki


```text
simpleicons-14/A/Anki
```

```text
include('simpleicons-14/A/Anki')
```



| Illustration | Anki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Anki.png) | ![illustration for Anki](../../simpleicons-14/A/Anki.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnkiXs>`
- `<$AnkiSm>`
- `<$AnkiMd>`
- `<$AnkiLg>`





## Anki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Anki
include('simpleicons-14/A/Anki')

' renders the element
Anki('Anki', 'Anki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Anki
include('simpleicons-14/A/Anki')

' renders the element
Anki('Anki', 'Anki', 'an optional tech label', 'an optional description')
@enduml
```

