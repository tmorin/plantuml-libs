# Protools


```text
simpleicons-14/P/Protools
```

```text
include('simpleicons-14/P/Protools')
```



| Illustration | Protools |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Protools.png) | ![illustration for Protools](../../simpleicons-14/P/Protools.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtoolsXs>`
- `<$ProtoolsSm>`
- `<$ProtoolsMd>`
- `<$ProtoolsLg>`





## Protools

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Protools
include('simpleicons-14/P/Protools')

' renders the element
Protools('Protools', 'Protools', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protools
include('simpleicons-14/P/Protools')

' renders the element
Protools('Protools', 'Protools', 'an optional tech label', 'an optional description')
@enduml
```

