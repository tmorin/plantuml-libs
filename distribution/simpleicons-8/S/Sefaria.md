# Sefaria


```text
simpleicons-8/S/Sefaria
```

```text
include('simpleicons-8/S/Sefaria')
```



| Illustration | Sefaria |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sefaria.png) | ![illustration for Sefaria](../../simpleicons-8/S/Sefaria.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SefariaXs>`
- `<$SefariaSm>`
- `<$SefariaMd>`
- `<$SefariaLg>`





## Sefaria

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sefaria
include('simpleicons-8/S/Sefaria')

' renders the element
Sefaria('Sefaria', 'Sefaria', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sefaria
include('simpleicons-8/S/Sefaria')

' renders the element
Sefaria('Sefaria', 'Sefaria', 'an optional tech label', 'an optional description')
@enduml
```

