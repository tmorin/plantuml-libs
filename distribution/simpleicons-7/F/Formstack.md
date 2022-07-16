# Formstack


```text
simpleicons-7/F/Formstack
```

```text
include('simpleicons-7/F/Formstack')
```



| Illustration | Formstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Formstack.png) | ![illustration for Formstack](../../simpleicons-7/F/Formstack.Local.png) |




## Formstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Formstack
include('simpleicons-7/F/Formstack')

' renders the element
Formstack('Formstack', 'Formstack', 'an optional tech label')
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

' loads the Item which embeds the element Formstack
include('simpleicons-7/F/Formstack')

' renders the element
Formstack('Formstack', 'Formstack', 'an optional tech label')
@enduml
```

