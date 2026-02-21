# Proteus


```text
simpleicons/P/Proteus
```

```text
include('simpleicons/P/Proteus')
```



| Illustration | Proteus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Proteus.png) | ![illustration for Proteus](../../simpleicons/P/Proteus.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Proteus
include('simpleicons/P/Proteus')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Proteus
include('simpleicons/P/Proteus')

' renders the element
Proteus('Proteus', 'Proteus', 'an optional tech label', 'an optional description')
@enduml
```

