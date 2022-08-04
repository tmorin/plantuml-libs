# Teradata


```text
simpleicons-7/T/Teradata
```

```text
include('simpleicons-7/T/Teradata')
```



| Illustration | Teradata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Teradata.png) | ![illustration for Teradata](../../simpleicons-7/T/Teradata.Local.png) |




## Teradata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Teradata
include('simpleicons-7/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Teradata
include('simpleicons-7/T/Teradata')

' renders the element
Teradata('Teradata', 'Teradata', 'an optional tech label', 'an optional description')
@enduml
```

