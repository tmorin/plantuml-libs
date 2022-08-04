# Favro


```text
simpleicons-7/F/Favro
```

```text
include('simpleicons-7/F/Favro')
```



| Illustration | Favro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Favro.png) | ![illustration for Favro](../../simpleicons-7/F/Favro.Local.png) |




## Favro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Favro
include('simpleicons-7/F/Favro')

' renders the element
Favro('Favro', 'Favro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Favro
include('simpleicons-7/F/Favro')

' renders the element
Favro('Favro', 'Favro', 'an optional tech label', 'an optional description')
@enduml
```

