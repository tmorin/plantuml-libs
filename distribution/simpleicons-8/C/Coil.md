# Coil


```text
simpleicons-8/C/Coil
```

```text
include('simpleicons-8/C/Coil')
```



| Illustration | Coil |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Coil.png) | ![illustration for Coil](../../simpleicons-8/C/Coil.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoilXs>`
- `<$CoilSm>`
- `<$CoilMd>`
- `<$CoilLg>`





## Coil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coil
include('simpleicons-8/C/Coil')

' renders the element
Coil('Coil', 'Coil', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Coil
include('simpleicons-8/C/Coil')

' renders the element
Coil('Coil', 'Coil', 'an optional tech label', 'an optional description')
@enduml
```

