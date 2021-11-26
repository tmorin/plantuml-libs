# Coursera


```text
simpleicons-5/C/Coursera
```

```text
include('simpleicons-5/C/Coursera')
```



| Illustration | Coursera |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Coursera.png) | ![illustration for Coursera](../../simpleicons-5/C/Coursera.Local.png) |




## Coursera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Coursera
include('simpleicons-5/C/Coursera')

' renders the element
Coursera('Coursera', 'Coursera', 'an optional tech label')
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

' loads the Item which embeds the element Coursera
include('simpleicons-5/C/Coursera')

' renders the element
Coursera('Coursera', 'Coursera', 'an optional tech label')
@enduml
```

