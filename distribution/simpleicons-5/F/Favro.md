# Favro


```text
simpleicons-5/F/Favro
```

```text
include('simpleicons-5/F/Favro')
```



| Illustration | Favro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Favro.png) | ![illustration for Favro](../../simpleicons-5/F/Favro.Local.png) |




## Favro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Favro
include('simpleicons-5/F/Favro')

' renders the element
Favro('Favro', 'Favro', 'an optional tech label')
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

' loads the Item which embeds the element Favro
include('simpleicons-5/F/Favro')

' renders the element
Favro('Favro', 'Favro', 'an optional tech label')
@enduml
```

