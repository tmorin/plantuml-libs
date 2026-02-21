# Astral


```text
simpleicons-14/A/Astral
```

```text
include('simpleicons-14/A/Astral')
```



| Illustration | Astral |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Astral.png) | ![illustration for Astral](../../simpleicons-14/A/Astral.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AstralXs>`
- `<$AstralSm>`
- `<$AstralMd>`
- `<$AstralLg>`





## Astral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Astral
include('simpleicons-14/A/Astral')

' renders the element
Astral('Astral', 'Astral', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Astral
include('simpleicons-14/A/Astral')

' renders the element
Astral('Astral', 'Astral', 'an optional tech label', 'an optional description')
@enduml
```

