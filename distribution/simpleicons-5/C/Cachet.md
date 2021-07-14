# Cachet


```text
simpleicons-5/C/Cachet
```

```text
include('simpleicons-5/C/Cachet')
```



| Illustration | Cachet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cachet.png) | ![illustration for Cachet](../../simpleicons-5/C/Cachet.Local.png) |




## Cachet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cachet
include('simpleicons-5/C/Cachet')

' renders the element
Cachet('Cachet', 'Cachet', 'an optional tech label')
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

' loads the Item which embeds the element Cachet
include('simpleicons-5/C/Cachet')

' renders the element
Cachet('Cachet', 'Cachet', 'an optional tech label')
@enduml
```

