# Dmm


```text
simpleicons-14/D/Dmm
```

```text
include('simpleicons-14/D/Dmm')
```



| Illustration | Dmm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dmm.png) | ![illustration for Dmm](../../simpleicons-14/D/Dmm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DmmXs>`
- `<$DmmSm>`
- `<$DmmMd>`
- `<$DmmLg>`





## Dmm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dmm
include('simpleicons-14/D/Dmm')

' renders the element
Dmm('Dmm', 'Dmm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dmm
include('simpleicons-14/D/Dmm')

' renders the element
Dmm('Dmm', 'Dmm', 'an optional tech label', 'an optional description')
@enduml
```

