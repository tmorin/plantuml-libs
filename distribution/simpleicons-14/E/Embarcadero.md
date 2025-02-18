# Embarcadero


```text
simpleicons-14/E/Embarcadero
```

```text
include('simpleicons-14/E/Embarcadero')
```



| Illustration | Embarcadero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Embarcadero.png) | ![illustration for Embarcadero](../../simpleicons-14/E/Embarcadero.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmbarcaderoXs>`
- `<$EmbarcaderoSm>`
- `<$EmbarcaderoMd>`
- `<$EmbarcaderoLg>`





## Embarcadero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Embarcadero
include('simpleicons-14/E/Embarcadero')

' renders the element
Embarcadero('Embarcadero', 'Embarcadero', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Embarcadero
include('simpleicons-14/E/Embarcadero')

' renders the element
Embarcadero('Embarcadero', 'Embarcadero', 'an optional tech label', 'an optional description')
@enduml
```

