# Teradata


```text
simpleicons-6/T/Teradata
```

```text
include('simpleicons-6/T/Teradata')
```



| Illustration | Teradata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Teradata.png) | ![illustration for Teradata](../../simpleicons-6/T/Teradata.Local.png) |




## Teradata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Teradata
include('simpleicons-6/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label')
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

' loads the Item which embeds the element Teradata
include('simpleicons-6/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label')
@enduml
```

