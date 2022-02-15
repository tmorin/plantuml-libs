# Teratail


```text
simpleicons-6/T/Teratail
```

```text
include('simpleicons-6/T/Teratail')
```



| Illustration | Teratail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Teratail.png) | ![illustration for Teratail](../../simpleicons-6/T/Teratail.Local.png) |




## Teratail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Teratail
include('simpleicons-6/T/Teratail')

' renders the element
Teratail('Teratail', 'Teratail', 'an optional tech label')
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

' loads the Item which embeds the element Teratail
include('simpleicons-6/T/Teratail')

' renders the element
Teratail('Teratail', 'Teratail', 'an optional tech label')
@enduml
```

