# Codementor


```text
simpleicons-14/C/Codementor
```

```text
include('simpleicons-14/C/Codementor')
```



| Illustration | Codementor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codementor.png) | ![illustration for Codementor](../../simpleicons-14/C/Codementor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodementorXs>`
- `<$CodementorSm>`
- `<$CodementorMd>`
- `<$CodementorLg>`





## Codementor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codementor
include('simpleicons-14/C/Codementor')

' renders the element
Codementor('Codementor', 'Codementor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codementor
include('simpleicons-14/C/Codementor')

' renders the element
Codementor('Codementor', 'Codementor', 'an optional tech label', 'an optional description')
@enduml
```

