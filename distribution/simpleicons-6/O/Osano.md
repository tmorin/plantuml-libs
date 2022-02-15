# Osano


```text
simpleicons-6/O/Osano
```

```text
include('simpleicons-6/O/Osano')
```



| Illustration | Osano |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Osano.png) | ![illustration for Osano](../../simpleicons-6/O/Osano.Local.png) |




## Osano

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Osano
include('simpleicons-6/O/Osano')

' renders the element
Osano('Osano', 'Osano', 'an optional tech label')
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

' loads the Item which embeds the element Osano
include('simpleicons-6/O/Osano')

' renders the element
Osano('Osano', 'Osano', 'an optional tech label')
@enduml
```

