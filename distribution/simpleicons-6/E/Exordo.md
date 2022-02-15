# Exordo


```text
simpleicons-6/E/Exordo
```

```text
include('simpleicons-6/E/Exordo')
```



| Illustration | Exordo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Exordo.png) | ![illustration for Exordo](../../simpleicons-6/E/Exordo.Local.png) |




## Exordo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Exordo
include('simpleicons-6/E/Exordo')

' renders the element
Exordo('Exordo', 'Exordo', 'an optional tech label')
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

' loads the Item which embeds the element Exordo
include('simpleicons-6/E/Exordo')

' renders the element
Exordo('Exordo', 'Exordo', 'an optional tech label')
@enduml
```

