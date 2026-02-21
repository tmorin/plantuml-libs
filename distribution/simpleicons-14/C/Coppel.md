# Coppel


```text
simpleicons-14/C/Coppel
```

```text
include('simpleicons-14/C/Coppel')
```



| Illustration | Coppel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coppel.png) | ![illustration for Coppel](../../simpleicons-14/C/Coppel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoppelXs>`
- `<$CoppelSm>`
- `<$CoppelMd>`
- `<$CoppelLg>`





## Coppel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coppel
include('simpleicons-14/C/Coppel')

' renders the element
Coppel('Coppel', 'Coppel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coppel
include('simpleicons-14/C/Coppel')

' renders the element
Coppel('Coppel', 'Coppel', 'an optional tech label', 'an optional description')
@enduml
```

