# Chemex


```text
simpleicons/C/Chemex
```

```text
include('simpleicons/C/Chemex')
```



| Illustration | Chemex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chemex.png) | ![illustration for Chemex](../../simpleicons/C/Chemex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChemexXs>`
- `<$ChemexSm>`
- `<$ChemexMd>`
- `<$ChemexLg>`





## Chemex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chemex
include('simpleicons/C/Chemex')

' renders the element
Chemex('Chemex', 'Chemex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chemex
include('simpleicons/C/Chemex')

' renders the element
Chemex('Chemex', 'Chemex', 'an optional tech label', 'an optional description')
@enduml
```

