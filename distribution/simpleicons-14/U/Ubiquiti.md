# Ubiquiti


```text
simpleicons-14/U/Ubiquiti
```

```text
include('simpleicons-14/U/Ubiquiti')
```



| Illustration | Ubiquiti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Ubiquiti.png) | ![illustration for Ubiquiti](../../simpleicons-14/U/Ubiquiti.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UbiquitiXs>`
- `<$UbiquitiSm>`
- `<$UbiquitiMd>`
- `<$UbiquitiLg>`





## Ubiquiti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ubiquiti
include('simpleicons-14/U/Ubiquiti')

' renders the element
Ubiquiti('Ubiquiti', 'Ubiquiti', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ubiquiti
include('simpleicons-14/U/Ubiquiti')

' renders the element
Ubiquiti('Ubiquiti', 'Ubiquiti', 'an optional tech label', 'an optional description')
@enduml
```

