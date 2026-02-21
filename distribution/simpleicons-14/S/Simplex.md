# Simplex


```text
simpleicons-14/S/Simplex
```

```text
include('simpleicons-14/S/Simplex')
```



| Illustration | Simplex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Simplex.png) | ![illustration for Simplex](../../simpleicons-14/S/Simplex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimplexXs>`
- `<$SimplexSm>`
- `<$SimplexMd>`
- `<$SimplexLg>`





## Simplex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Simplex
include('simpleicons-14/S/Simplex')

' renders the element
Simplex('Simplex', 'Simplex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simplex
include('simpleicons-14/S/Simplex')

' renders the element
Simplex('Simplex', 'Simplex', 'an optional tech label', 'an optional description')
@enduml
```

