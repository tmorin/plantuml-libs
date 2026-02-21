# Claris


```text
simpleicons/C/Claris
```

```text
include('simpleicons/C/Claris')
```



| Illustration | Claris |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Claris.png) | ![illustration for Claris](../../simpleicons/C/Claris.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClarisXs>`
- `<$ClarisSm>`
- `<$ClarisMd>`
- `<$ClarisLg>`





## Claris

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Claris
include('simpleicons/C/Claris')

' renders the element
Claris('Claris', 'Claris', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Claris
include('simpleicons/C/Claris')

' renders the element
Claris('Claris', 'Claris', 'an optional tech label', 'an optional description')
@enduml
```

