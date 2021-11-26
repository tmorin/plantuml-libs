# Microsoftword


```text
simpleicons-5/M/Microsoftword
```

```text
include('simpleicons-5/M/Microsoftword')
```



| Illustration | Microsoftword |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftword.png) | ![illustration for Microsoftword](../../simpleicons-5/M/Microsoftword.Local.png) |




## Microsoftword

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftword
include('simpleicons-5/M/Microsoftword')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftword
include('simpleicons-5/M/Microsoftword')

' renders the element
Microsoftword('Microsoftword', 'Microsoftword', 'an optional tech label')
@enduml
```

