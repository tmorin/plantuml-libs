# Metrodeparis


```text
simpleicons-14/M/Metrodeparis
```

```text
include('simpleicons-14/M/Metrodeparis')
```



| Illustration | Metrodeparis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Metrodeparis.png) | ![illustration for Metrodeparis](../../simpleicons-14/M/Metrodeparis.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MetrodeparisXs>`
- `<$MetrodeparisSm>`
- `<$MetrodeparisMd>`
- `<$MetrodeparisLg>`





## Metrodeparis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Metrodeparis
include('simpleicons-14/M/Metrodeparis')

' renders the element
Metrodeparis('Metrodeparis', 'Metrodeparis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Metrodeparis
include('simpleicons-14/M/Metrodeparis')

' renders the element
Metrodeparis('Metrodeparis', 'Metrodeparis', 'an optional tech label', 'an optional description')
@enduml
```

