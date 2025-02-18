# Wolframmathematica


```text
simpleicons-14/W/Wolframmathematica
```

```text
include('simpleicons-14/W/Wolframmathematica')
```



| Illustration | Wolframmathematica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wolframmathematica.png) | ![illustration for Wolframmathematica](../../simpleicons-14/W/Wolframmathematica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WolframmathematicaXs>`
- `<$WolframmathematicaSm>`
- `<$WolframmathematicaMd>`
- `<$WolframmathematicaLg>`





## Wolframmathematica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wolframmathematica
include('simpleicons-14/W/Wolframmathematica')

' renders the element
Wolframmathematica('Wolframmathematica', 'Wolframmathematica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wolframmathematica
include('simpleicons-14/W/Wolframmathematica')

' renders the element
Wolframmathematica('Wolframmathematica', 'Wolframmathematica', 'an optional tech label', 'an optional description')
@enduml
```

