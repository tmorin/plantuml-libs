# Avast


```text
simpleicons-6/A/Avast
```

```text
include('simpleicons-6/A/Avast')
```



| Illustration | Avast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Avast.png) | ![illustration for Avast](../../simpleicons-6/A/Avast.Local.png) |




## Avast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons-6/A/Avast')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons-6/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label')
@enduml
```

