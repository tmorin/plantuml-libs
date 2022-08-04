# Analogue


```text
simpleicons-7/A/Analogue
```

```text
include('simpleicons-7/A/Analogue')
```



| Illustration | Analogue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Analogue.png) | ![illustration for Analogue](../../simpleicons-7/A/Analogue.Local.png) |




## Analogue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Analogue
include('simpleicons-7/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Analogue
include('simpleicons-7/A/Analogue')

' renders the element
Analogue('Analogue', 'Analogue', 'an optional tech label', 'an optional description')
@enduml
```

