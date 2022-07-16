# Preact


```text
simpleicons-7/P/Preact
```

```text
include('simpleicons-7/P/Preact')
```



| Illustration | Preact |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Preact.png) | ![illustration for Preact](../../simpleicons-7/P/Preact.Local.png) |




## Preact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Preact
include('simpleicons-7/P/Preact')

' renders the element
Preact('Preact', 'Preact', 'an optional tech label')
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

' loads the Item which embeds the element Preact
include('simpleicons-7/P/Preact')

' renders the element
Preact('Preact', 'Preact', 'an optional tech label')
@enduml
```

