# Filament


```text
simpleicons-14/F/Filament
```

```text
include('simpleicons-14/F/Filament')
```



| Illustration | Filament |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Filament.png) | ![illustration for Filament](../../simpleicons-14/F/Filament.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FilamentXs>`
- `<$FilamentSm>`
- `<$FilamentMd>`
- `<$FilamentLg>`





## Filament

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Filament
include('simpleicons-14/F/Filament')

' renders the element
Filament('Filament', 'Filament', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Filament
include('simpleicons-14/F/Filament')

' renders the element
Filament('Filament', 'Filament', 'an optional tech label', 'an optional description')
@enduml
```

