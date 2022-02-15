# Kaspersky


```text
simpleicons-6/K/Kaspersky
```

```text
include('simpleicons-6/K/Kaspersky')
```



| Illustration | Kaspersky |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kaspersky.png) | ![illustration for Kaspersky](../../simpleicons-6/K/Kaspersky.Local.png) |




## Kaspersky

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons-6/K/Kaspersky')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kaspersky
include('simpleicons-6/K/Kaspersky')

' renders the element
Kaspersky('Kaspersky', 'Kaspersky', 'an optional tech label')
@enduml
```

