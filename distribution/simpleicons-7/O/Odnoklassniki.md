# Odnoklassniki


```text
simpleicons-7/O/Odnoklassniki
```

```text
include('simpleicons-7/O/Odnoklassniki')
```



| Illustration | Odnoklassniki |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Odnoklassniki.png) | ![illustration for Odnoklassniki](../../simpleicons-7/O/Odnoklassniki.Local.png) |




## Odnoklassniki

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Odnoklassniki
include('simpleicons-7/O/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Odnoklassniki
include('simpleicons-7/O/Odnoklassniki')

' renders the element
Odnoklassniki('Odnoklassniki', 'Odnoklassniki', 'an optional tech label', 'an optional description')
@enduml
```

