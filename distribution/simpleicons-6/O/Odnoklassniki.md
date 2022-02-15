# Odnoklassniki


```text
simpleicons-6/O/Odnoklassniki
```

```text
include('simpleicons-6/O/Odnoklassniki')
```



| Illustration | Odnoklassniki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Odnoklassniki.png) | ![illustration for Odnoklassniki](../../simpleicons-6/O/Odnoklassniki.Local.png) |




## Odnoklassniki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Odnoklassniki
include('simpleicons-6/O/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label')
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

' loads the Item which embeds the element Odnoklassniki
include('simpleicons-6/O/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label')
@enduml
```

