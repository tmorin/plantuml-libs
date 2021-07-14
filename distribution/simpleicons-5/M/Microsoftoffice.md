# Microsoftoffice


```text
simpleicons-5/M/Microsoftoffice
```

```text
include('simpleicons-5/M/Microsoftoffice')
```



| Illustration | Microsoftoffice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftoffice.png) | ![illustration for Microsoftoffice](../../simpleicons-5/M/Microsoftoffice.Local.png) |




## Microsoftoffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftoffice
include('simpleicons-5/M/Microsoftoffice')

' renders the element
Microsoftoffice('Microsoftoffice', 'Microsoftoffice', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftoffice
include('simpleicons-5/M/Microsoftoffice')

' renders the element
Microsoftoffice('Microsoftoffice', 'Microsoftoffice', 'an optional tech label')
@enduml
```

