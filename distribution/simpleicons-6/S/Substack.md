# Substack


```text
simpleicons-6/S/Substack
```

```text
include('simpleicons-6/S/Substack')
```



| Illustration | Substack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Substack.png) | ![illustration for Substack](../../simpleicons-6/S/Substack.Local.png) |




## Substack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Substack
include('simpleicons-6/S/Substack')

' renders the element
Substack('Substack', 'Substack', 'an optional tech label')
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

' loads the Item which embeds the element Substack
include('simpleicons-6/S/Substack')

' renders the element
Substack('Substack', 'Substack', 'an optional tech label')
@enduml
```

