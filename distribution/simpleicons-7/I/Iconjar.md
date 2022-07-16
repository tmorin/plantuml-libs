# Iconjar


```text
simpleicons-7/I/Iconjar
```

```text
include('simpleicons-7/I/Iconjar')
```



| Illustration | Iconjar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Iconjar.png) | ![illustration for Iconjar](../../simpleicons-7/I/Iconjar.Local.png) |




## Iconjar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iconjar
include('simpleicons-7/I/Iconjar')

' renders the element
Iconjar('Iconjar', 'Iconjar', 'an optional tech label')
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

' loads the Item which embeds the element Iconjar
include('simpleicons-7/I/Iconjar')

' renders the element
Iconjar('Iconjar', 'Iconjar', 'an optional tech label')
@enduml
```

