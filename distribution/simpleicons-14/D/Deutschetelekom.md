# Deutschetelekom


```text
simpleicons-14/D/Deutschetelekom
```

```text
include('simpleicons-14/D/Deutschetelekom')
```



| Illustration | Deutschetelekom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deutschetelekom.png) | ![illustration for Deutschetelekom](../../simpleicons-14/D/Deutschetelekom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeutschetelekomXs>`
- `<$DeutschetelekomSm>`
- `<$DeutschetelekomMd>`
- `<$DeutschetelekomLg>`





## Deutschetelekom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deutschetelekom
include('simpleicons-14/D/Deutschetelekom')

' renders the element
Deutschetelekom('Deutschetelekom', 'Deutschetelekom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deutschetelekom
include('simpleicons-14/D/Deutschetelekom')

' renders the element
Deutschetelekom('Deutschetelekom', 'Deutschetelekom', 'an optional tech label', 'an optional description')
@enduml
```

