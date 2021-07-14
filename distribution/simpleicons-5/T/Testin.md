# Testin


```text
simpleicons-5/T/Testin
```

```text
include('simpleicons-5/T/Testin')
```



| Illustration | Testin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Testin.png) | ![illustration for Testin](../../simpleicons-5/T/Testin.Local.png) |




## Testin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Testin
include('simpleicons-5/T/Testin')

' renders the element
Testin('Testin', 'Testin', 'an optional tech label')
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

' loads the Item which embeds the element Testin
include('simpleicons-5/T/Testin')

' renders the element
Testin('Testin', 'Testin', 'an optional tech label')
@enduml
```

