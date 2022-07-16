# Metrodeparis


```text
simpleicons-7/M/Metrodeparis
```

```text
include('simpleicons-7/M/Metrodeparis')
```



| Illustration | Metrodeparis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Metrodeparis.png) | ![illustration for Metrodeparis](../../simpleicons-7/M/Metrodeparis.Local.png) |




## Metrodeparis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Metrodeparis
include('simpleicons-7/M/Metrodeparis')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Metrodeparis
include('simpleicons-7/M/Metrodeparis')

' renders the element
Metrodeparis('Metrodeparis', 'Metrodeparis', 'an optional tech label')
@enduml
```

