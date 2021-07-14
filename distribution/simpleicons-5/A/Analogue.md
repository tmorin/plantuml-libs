# Analogue


```text
simpleicons-5/A/Analogue
```

```text
include('simpleicons-5/A/Analogue')
```



| Illustration | Analogue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Analogue.png) | ![illustration for Analogue](../../simpleicons-5/A/Analogue.Local.png) |




## Analogue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Analogue
include('simpleicons-5/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label')
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

' loads the Item which embeds the element Analogue
include('simpleicons-5/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label')
@enduml
```

