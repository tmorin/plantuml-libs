# Airbyte


```text
simpleicons-7/A/Airbyte
```

```text
include('simpleicons-7/A/Airbyte')
```



| Illustration | Airbyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Airbyte.png) | ![illustration for Airbyte](../../simpleicons-7/A/Airbyte.Local.png) |




## Airbyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Airbyte
include('simpleicons-7/A/Airbyte')

' renders the element
Airbyte('Airbyte', 'Airbyte', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Airbyte
include('simpleicons-7/A/Airbyte')

' renders the element
Airbyte('Airbyte', 'Airbyte', 'an optional tech label', 'an optional description')
@enduml
```

