# Alternativeto


```text
simpleicons-14/A/Alternativeto
```

```text
include('simpleicons-14/A/Alternativeto')
```



| Illustration | Alternativeto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alternativeto.png) | ![illustration for Alternativeto](../../simpleicons-14/A/Alternativeto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlternativetoXs>`
- `<$AlternativetoSm>`
- `<$AlternativetoMd>`
- `<$AlternativetoLg>`





## Alternativeto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alternativeto
include('simpleicons-14/A/Alternativeto')

' renders the element
Alternativeto('Alternativeto', 'Alternativeto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alternativeto
include('simpleicons-14/A/Alternativeto')

' renders the element
Alternativeto('Alternativeto', 'Alternativeto', 'an optional tech label', 'an optional description')
@enduml
```

