# Jamstack


```text
simpleicons-5/J/Jamstack
```

```text
include('simpleicons-5/J/Jamstack')
```



| Illustration | Jamstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jamstack.png) | ![illustration for Jamstack](../../simpleicons-5/J/Jamstack.Local.png) |




## Jamstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jamstack
include('simpleicons-5/J/Jamstack')

' renders the element
Jamstack('Jamstack', 'Jamstack', 'an optional tech label')
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

' loads the Item which embeds the element Jamstack
include('simpleicons-5/J/Jamstack')

' renders the element
Jamstack('Jamstack', 'Jamstack', 'an optional tech label')
@enduml
```

