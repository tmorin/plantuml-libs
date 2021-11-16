# Avast


```text
simpleicons-5/A/Avast
```

```text
include('simpleicons-5/A/Avast')
```



| Illustration | Avast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Avast.png) | ![illustration for Avast](../../simpleicons-5/A/Avast.Local.png) |




## Avast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons-5/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label')
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

' loads the Item which embeds the element Avast
include('simpleicons-5/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label')
@enduml
```

