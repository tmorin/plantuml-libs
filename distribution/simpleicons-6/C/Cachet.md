# Cachet


```text
simpleicons-6/C/Cachet
```

```text
include('simpleicons-6/C/Cachet')
```



| Illustration | Cachet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Cachet.png) | ![illustration for Cachet](../../simpleicons-6/C/Cachet.Local.png) |




## Cachet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cachet
include('simpleicons-6/C/Cachet')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Cachet
include('simpleicons-6/C/Cachet')

' renders the element
Cachet('Cachet', 'Cachet', 'an optional tech label')
@enduml
```

