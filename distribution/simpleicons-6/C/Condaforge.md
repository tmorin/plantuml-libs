# Condaforge


```text
simpleicons-6/C/Condaforge
```

```text
include('simpleicons-6/C/Condaforge')
```



| Illustration | Condaforge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Condaforge.png) | ![illustration for Condaforge](../../simpleicons-6/C/Condaforge.Local.png) |




## Condaforge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Condaforge
include('simpleicons-6/C/Condaforge')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Condaforge
include('simpleicons-6/C/Condaforge')

' renders the element
Condaforge('Condaforge', 'Condaforge', 'an optional tech label')
@enduml
```

