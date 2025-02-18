# Cultura


```text
simpleicons-14/C/Cultura
```

```text
include('simpleicons-14/C/Cultura')
```



| Illustration | Cultura |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cultura.png) | ![illustration for Cultura](../../simpleicons-14/C/Cultura.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CulturaXs>`
- `<$CulturaSm>`
- `<$CulturaMd>`
- `<$CulturaLg>`





## Cultura

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cultura
include('simpleicons-14/C/Cultura')

' renders the element
Cultura('Cultura', 'Cultura', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cultura
include('simpleicons-14/C/Cultura')

' renders the element
Cultura('Cultura', 'Cultura', 'an optional tech label', 'an optional description')
@enduml
```

