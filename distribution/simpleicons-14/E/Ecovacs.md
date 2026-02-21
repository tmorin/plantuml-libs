# Ecovacs


```text
simpleicons-14/E/Ecovacs
```

```text
include('simpleicons-14/E/Ecovacs')
```



| Illustration | Ecovacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ecovacs.png) | ![illustration for Ecovacs](../../simpleicons-14/E/Ecovacs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EcovacsXs>`
- `<$EcovacsSm>`
- `<$EcovacsMd>`
- `<$EcovacsLg>`





## Ecovacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ecovacs
include('simpleicons-14/E/Ecovacs')

' renders the element
Ecovacs('Ecovacs', 'Ecovacs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ecovacs
include('simpleicons-14/E/Ecovacs')

' renders the element
Ecovacs('Ecovacs', 'Ecovacs', 'an optional tech label', 'an optional description')
@enduml
```

