# Creativecommons


```text
simpleicons-6/C/Creativecommons
```

```text
include('simpleicons-6/C/Creativecommons')
```



| Illustration | Creativecommons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Creativecommons.png) | ![illustration for Creativecommons](../../simpleicons-6/C/Creativecommons.Local.png) |




## Creativecommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Creativecommons
include('simpleicons-6/C/Creativecommons')

' renders the element
Creativecommons('Creativecommons', 'Creativecommons', 'an optional tech label')
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

' loads the Item which embeds the element Creativecommons
include('simpleicons-6/C/Creativecommons')

' renders the element
Creativecommons('Creativecommons', 'Creativecommons', 'an optional tech label')
@enduml
```

