# Chemex


```text
simpleicons-14/C/Chemex
```

```text
include('simpleicons-14/C/Chemex')
```



| Illustration | Chemex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chemex.png) | ![illustration for Chemex](../../simpleicons-14/C/Chemex.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chemex
include('simpleicons-14/C/Chemex')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chemex
include('simpleicons-14/C/Chemex')

' renders the element
Chemex('Chemex', 'Chemex', 'an optional tech label', 'an optional description')
@enduml
```

