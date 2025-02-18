# Drooble


```text
simpleicons-14/D/Drooble
```

```text
include('simpleicons-14/D/Drooble')
```



| Illustration | Drooble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Drooble.png) | ![illustration for Drooble](../../simpleicons-14/D/Drooble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DroobleXs>`
- `<$DroobleSm>`
- `<$DroobleMd>`
- `<$DroobleLg>`





## Drooble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Drooble
include('simpleicons-14/D/Drooble')

' renders the element
Drooble('Drooble', 'Drooble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Drooble
include('simpleicons-14/D/Drooble')

' renders the element
Drooble('Drooble', 'Drooble', 'an optional tech label', 'an optional description')
@enduml
```

