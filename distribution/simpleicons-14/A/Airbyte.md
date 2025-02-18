# Airbyte


```text
simpleicons-14/A/Airbyte
```

```text
include('simpleicons-14/A/Airbyte')
```



| Illustration | Airbyte |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Airbyte.png) | ![illustration for Airbyte](../../simpleicons-14/A/Airbyte.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AirbyteXs>`
- `<$AirbyteSm>`
- `<$AirbyteMd>`
- `<$AirbyteLg>`





## Airbyte

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airbyte
include('simpleicons-14/A/Airbyte')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Airbyte
include('simpleicons-14/A/Airbyte')

' renders the element
Airbyte('Airbyte', 'Airbyte', 'an optional tech label', 'an optional description')
@enduml
```

