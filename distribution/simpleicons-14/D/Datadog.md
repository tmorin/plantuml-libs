# Datadog


```text
simpleicons-14/D/Datadog
```

```text
include('simpleicons-14/D/Datadog')
```



| Illustration | Datadog |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Datadog.png) | ![illustration for Datadog](../../simpleicons-14/D/Datadog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatadogXs>`
- `<$DatadogSm>`
- `<$DatadogMd>`
- `<$DatadogLg>`





## Datadog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Datadog
include('simpleicons-14/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datadog
include('simpleicons-14/D/Datadog')

' renders the element
Datadog('Datadog', 'Datadog', 'an optional tech label', 'an optional description')
@enduml
```

