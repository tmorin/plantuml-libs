# Redhatopenshift


```text
simpleicons-6/R/Redhatopenshift
```

```text
include('simpleicons-6/R/Redhatopenshift')
```



| Illustration | Redhatopenshift |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Redhatopenshift.png) | ![illustration for Redhatopenshift](../../simpleicons-6/R/Redhatopenshift.Local.png) |




## Redhatopenshift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Redhatopenshift
include('simpleicons-6/R/Redhatopenshift')

' renders the element
Redhatopenshift('Redhatopenshift', 'Redhatopenshift', 'an optional tech label')
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

' loads the Item which embeds the element Redhatopenshift
include('simpleicons-6/R/Redhatopenshift')

' renders the element
Redhatopenshift('Redhatopenshift', 'Redhatopenshift', 'an optional tech label')
@enduml
```

