# Egnyte


```text
simpleicons-5/E/Egnyte
```

```text
include('simpleicons-5/E/Egnyte')
```



| Illustration | Egnyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Egnyte.png) | ![illustration for Egnyte](../../simpleicons-5/E/Egnyte.Local.png) |




## Egnyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Egnyte
include('simpleicons-5/E/Egnyte')

' renders the element
Egnyte('Egnyte', 'Egnyte', 'an optional tech label')
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

' loads the Item which embeds the element Egnyte
include('simpleicons-5/E/Egnyte')

' renders the element
Egnyte('Egnyte', 'Egnyte', 'an optional tech label')
@enduml
```

