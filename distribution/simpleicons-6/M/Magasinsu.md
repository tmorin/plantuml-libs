# Magasinsu


```text
simpleicons-6/M/Magasinsu
```

```text
include('simpleicons-6/M/Magasinsu')
```



| Illustration | Magasinsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Magasinsu.png) | ![illustration for Magasinsu](../../simpleicons-6/M/Magasinsu.Local.png) |




## Magasinsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Magasinsu
include('simpleicons-6/M/Magasinsu')

' renders the element
Magasinsu('Magasinsu', 'Magasinsu', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Magasinsu
include('simpleicons-6/M/Magasinsu')

' renders the element
Magasinsu('Magasinsu', 'Magasinsu', 'an optional tech label')
@enduml
```

