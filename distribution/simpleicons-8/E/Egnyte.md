# Egnyte


```text
simpleicons-8/E/Egnyte
```

```text
include('simpleicons-8/E/Egnyte')
```



| Illustration | Egnyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Egnyte.png) | ![illustration for Egnyte](../../simpleicons-8/E/Egnyte.Local.png) |




## Egnyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Egnyte
include('simpleicons-8/E/Egnyte')

' renders the element
Egnyte('Egnyte', 'Egnyte', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Egnyte
include('simpleicons-8/E/Egnyte')

' renders the element
Egnyte('Egnyte', 'Egnyte', 'an optional tech label', 'an optional description')
@enduml
```

