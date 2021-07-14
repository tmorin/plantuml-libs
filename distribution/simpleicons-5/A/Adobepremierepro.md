# Adobepremierepro


```text
simpleicons-5/A/Adobepremierepro
```

```text
include('simpleicons-5/A/Adobepremierepro')
```



| Illustration | Adobepremierepro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adobepremierepro.png) | ![illustration for Adobepremierepro](../../simpleicons-5/A/Adobepremierepro.Local.png) |




## Adobepremierepro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adobepremierepro
include('simpleicons-5/A/Adobepremierepro')

' renders the element
Adobepremierepro('Adobepremierepro', 'Adobepremierepro', 'an optional tech label')
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

' loads the Item which embeds the element Adobepremierepro
include('simpleicons-5/A/Adobepremierepro')

' renders the element
Adobepremierepro('Adobepremierepro', 'Adobepremierepro', 'an optional tech label')
@enduml
```

