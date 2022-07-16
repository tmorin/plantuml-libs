# Microsoftoffice


```text
simpleicons-7/M/Microsoftoffice
```

```text
include('simpleicons-7/M/Microsoftoffice')
```



| Illustration | Microsoftoffice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Microsoftoffice.png) | ![illustration for Microsoftoffice](../../simpleicons-7/M/Microsoftoffice.Local.png) |




## Microsoftoffice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Microsoftoffice
include('simpleicons-7/M/Microsoftoffice')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Microsoftoffice
include('simpleicons-7/M/Microsoftoffice')

' renders the element
Microsoftoffice('Microsoftoffice', 'Microsoftoffice', 'an optional tech label')
@enduml
```

