# Squarespace


```text
simpleicons-6/S/Squarespace
```

```text
include('simpleicons-6/S/Squarespace')
```



| Illustration | Squarespace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Squarespace.png) | ![illustration for Squarespace](../../simpleicons-6/S/Squarespace.Local.png) |




## Squarespace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Squarespace
include('simpleicons-6/S/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label')
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

' loads the Item which embeds the element Squarespace
include('simpleicons-6/S/Squarespace')

' renders the element
Squarespace('Squarespace', 'Squarespace', 'an optional tech label')
@enduml
```

