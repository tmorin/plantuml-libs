# Aldinord


```text
simpleicons/A/Aldinord
```

```text
include('simpleicons/A/Aldinord')
```



| Illustration | Aldinord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Aldinord.png) | ![illustration for Aldinord](../../simpleicons/A/Aldinord.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AldinordXs>`
- `<$AldinordSm>`
- `<$AldinordMd>`
- `<$AldinordLg>`





## Aldinord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Aldinord
include('simpleicons/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aldinord
include('simpleicons/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label', 'an optional description')
@enduml
```

