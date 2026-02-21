# Creality


```text
simpleicons-14/C/Creality
```

```text
include('simpleicons-14/C/Creality')
```



| Illustration | Creality |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Creality.png) | ![illustration for Creality](../../simpleicons-14/C/Creality.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrealityXs>`
- `<$CrealitySm>`
- `<$CrealityMd>`
- `<$CrealityLg>`





## Creality

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Creality
include('simpleicons-14/C/Creality')

' renders the element
Creality('Creality', 'Creality', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Creality
include('simpleicons-14/C/Creality')

' renders the element
Creality('Creality', 'Creality', 'an optional tech label', 'an optional description')
@enduml
```

