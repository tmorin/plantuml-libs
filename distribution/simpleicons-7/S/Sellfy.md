# Sellfy


```text
simpleicons-7/S/Sellfy
```

```text
include('simpleicons-7/S/Sellfy')
```



| Illustration | Sellfy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sellfy.png) | ![illustration for Sellfy](../../simpleicons-7/S/Sellfy.Local.png) |




## Sellfy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sellfy
include('simpleicons-7/S/Sellfy')

' renders the element
Sellfy('Sellfy', 'Sellfy', 'an optional tech label')
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

' loads the Item which embeds the element Sellfy
include('simpleicons-7/S/Sellfy')

' renders the element
Sellfy('Sellfy', 'Sellfy', 'an optional tech label')
@enduml
```

