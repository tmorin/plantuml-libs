# Proteus


```text
simpleicons-14/P/Proteus
```

```text
include('simpleicons-14/P/Proteus')
```



| Illustration | Proteus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Proteus.png) | ![illustration for Proteus](../../simpleicons-14/P/Proteus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProteusXs>`
- `<$ProteusSm>`
- `<$ProteusMd>`
- `<$ProteusLg>`





## Proteus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Proteus
include('simpleicons-14/P/Proteus')

' renders the element
Proteus('Proteus', 'Proteus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Proteus
include('simpleicons-14/P/Proteus')

' renders the element
Proteus('Proteus', 'Proteus', 'an optional tech label', 'an optional description')
@enduml
```

