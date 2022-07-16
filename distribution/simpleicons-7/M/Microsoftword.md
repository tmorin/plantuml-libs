# Microsoftword


```text
simpleicons-7/M/Microsoftword
```

```text
include('simpleicons-7/M/Microsoftword')
```



| Illustration | Microsoftword |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Microsoftword.png) | ![illustration for Microsoftword](../../simpleicons-7/M/Microsoftword.Local.png) |




## Microsoftword

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Microsoftword
include('simpleicons-7/M/Microsoftword')

' renders the element
Microsoftword('Microsoftword', 'Microsoftword', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftword
include('simpleicons-7/M/Microsoftword')

' renders the element
Microsoftword('Microsoftword', 'Microsoftword', 'an optional tech label')
@enduml
```

