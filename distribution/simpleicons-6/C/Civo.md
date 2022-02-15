# Civo


```text
simpleicons-6/C/Civo
```

```text
include('simpleicons-6/C/Civo')
```



| Illustration | Civo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Civo.png) | ![illustration for Civo](../../simpleicons-6/C/Civo.Local.png) |




## Civo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Civo
include('simpleicons-6/C/Civo')

' renders the element
Civo('Civo', 'Civo', 'an optional tech label')
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

' loads the Item which embeds the element Civo
include('simpleicons-6/C/Civo')

' renders the element
Civo('Civo', 'Civo', 'an optional tech label')
@enduml
```

