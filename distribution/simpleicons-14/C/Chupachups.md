# Chupachups


```text
simpleicons-14/C/Chupachups
```

```text
include('simpleicons-14/C/Chupachups')
```



| Illustration | Chupachups |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chupachups.png) | ![illustration for Chupachups](../../simpleicons-14/C/Chupachups.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChupachupsXs>`
- `<$ChupachupsSm>`
- `<$ChupachupsMd>`
- `<$ChupachupsLg>`





## Chupachups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chupachups
include('simpleicons-14/C/Chupachups')

' renders the element
Chupachups('Chupachups', 'Chupachups', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chupachups
include('simpleicons-14/C/Chupachups')

' renders the element
Chupachups('Chupachups', 'Chupachups', 'an optional tech label', 'an optional description')
@enduml
```

