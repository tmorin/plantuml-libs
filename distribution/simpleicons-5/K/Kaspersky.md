# Kaspersky


```text
simpleicons-5/K/Kaspersky
```

```text
include('simpleicons-5/K/Kaspersky')
```



| Illustration | Kaspersky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kaspersky.png) | ![illustration for Kaspersky](../../simpleicons-5/K/Kaspersky.Local.png) |




## Kaspersky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons-5/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label')
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

' loads the Item which embeds the element Kaspersky
include('simpleicons-5/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label')
@enduml
```

