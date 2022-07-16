# Condaforge


```text
simpleicons-7/C/Condaforge
```

```text
include('simpleicons-7/C/Condaforge')
```



| Illustration | Condaforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Condaforge.png) | ![illustration for Condaforge](../../simpleicons-7/C/Condaforge.Local.png) |




## Condaforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Condaforge
include('simpleicons-7/C/Condaforge')

' renders the element
Condaforge('Condaforge', 'Condaforge', 'an optional tech label')
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

' loads the Item which embeds the element Condaforge
include('simpleicons-7/C/Condaforge')

' renders the element
Condaforge('Condaforge', 'Condaforge', 'an optional tech label')
@enduml
```

