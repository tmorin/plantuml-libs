# Zenodo


```text
simpleicons-6/Z/Zenodo
```

```text
include('simpleicons-6/Z/Zenodo')
```



| Illustration | Zenodo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Z/Zenodo.png) | ![illustration for Zenodo](../../simpleicons-6/Z/Zenodo.Local.png) |




## Zenodo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Zenodo
include('simpleicons-6/Z/Zenodo')

' renders the element
Zenodo('Zenodo', 'Zenodo', 'an optional tech label')
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

' loads the Item which embeds the element Zenodo
include('simpleicons-6/Z/Zenodo')

' renders the element
Zenodo('Zenodo', 'Zenodo', 'an optional tech label')
@enduml
```

