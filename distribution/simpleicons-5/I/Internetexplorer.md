# Internetexplorer


```text
simpleicons-5/I/Internetexplorer
```

```text
include('simpleicons-5/I/Internetexplorer')
```



| Illustration | Internetexplorer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Internetexplorer.png) | ![illustration for Internetexplorer](../../simpleicons-5/I/Internetexplorer.Local.png) |




## Internetexplorer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Internetexplorer
include('simpleicons-5/I/Internetexplorer')

' renders the element
Internetexplorer('Internetexplorer', 'Internetexplorer', 'an optional tech label')
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

' loads the Item which embeds the element Internetexplorer
include('simpleicons-5/I/Internetexplorer')

' renders the element
Internetexplorer('Internetexplorer', 'Internetexplorer', 'an optional tech label')
@enduml
```

