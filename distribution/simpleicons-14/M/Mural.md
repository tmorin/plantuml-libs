# Mural


```text
simpleicons-14/M/Mural
```

```text
include('simpleicons-14/M/Mural')
```



| Illustration | Mural |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mural.png) | ![illustration for Mural](../../simpleicons-14/M/Mural.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MuralXs>`
- `<$MuralSm>`
- `<$MuralMd>`
- `<$MuralLg>`





## Mural

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mural
include('simpleicons-14/M/Mural')

' renders the element
Mural('Mural', 'Mural', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mural
include('simpleicons-14/M/Mural')

' renders the element
Mural('Mural', 'Mural', 'an optional tech label', 'an optional description')
@enduml
```

