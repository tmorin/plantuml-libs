# Suno


```text
simpleicons-14/S/Suno
```

```text
include('simpleicons-14/S/Suno')
```



| Illustration | Suno |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Suno.png) | ![illustration for Suno](../../simpleicons-14/S/Suno.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SunoXs>`
- `<$SunoSm>`
- `<$SunoMd>`
- `<$SunoLg>`





## Suno

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Suno
include('simpleicons-14/S/Suno')

' renders the element
Suno('Suno', 'Suno', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suno
include('simpleicons-14/S/Suno')

' renders the element
Suno('Suno', 'Suno', 'an optional tech label', 'an optional description')
@enduml
```

