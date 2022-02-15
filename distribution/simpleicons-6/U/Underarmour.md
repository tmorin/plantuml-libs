# Underarmour


```text
simpleicons-6/U/Underarmour
```

```text
include('simpleicons-6/U/Underarmour')
```



| Illustration | Underarmour |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Underarmour.png) | ![illustration for Underarmour](../../simpleicons-6/U/Underarmour.Local.png) |




## Underarmour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Underarmour
include('simpleicons-6/U/Underarmour')

' renders the element
Underarmour('Underarmour', 'Underarmour', 'an optional tech label')
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

' loads the Item which embeds the element Underarmour
include('simpleicons-6/U/Underarmour')

' renders the element
Underarmour('Underarmour', 'Underarmour', 'an optional tech label')
@enduml
```

