# Metrodeparis


```text
simpleicons-5/M/Metrodeparis
```

```text
include('simpleicons-5/M/Metrodeparis')
```



| Illustration | Metrodeparis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Metrodeparis.png) | ![illustration for Metrodeparis](../../simpleicons-5/M/Metrodeparis.Local.png) |




## Metrodeparis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Metrodeparis
include('simpleicons-5/M/Metrodeparis')

' renders the element
Metrodeparis('Metrodeparis', 'Metrodeparis', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Metrodeparis
include('simpleicons-5/M/Metrodeparis')

' renders the element
Metrodeparis('Metrodeparis', 'Metrodeparis', 'an optional tech label')
@enduml
```

