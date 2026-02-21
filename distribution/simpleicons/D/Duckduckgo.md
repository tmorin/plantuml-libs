# Duckduckgo


```text
simpleicons/D/Duckduckgo
```

```text
include('simpleicons/D/Duckduckgo')
```



| Illustration | Duckduckgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Duckduckgo.png) | ![illustration for Duckduckgo](../../simpleicons/D/Duckduckgo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuckduckgoXs>`
- `<$DuckduckgoSm>`
- `<$DuckduckgoMd>`
- `<$DuckduckgoLg>`





## Duckduckgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Duckduckgo
include('simpleicons/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duckduckgo
include('simpleicons/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label', 'an optional description')
@enduml
```

