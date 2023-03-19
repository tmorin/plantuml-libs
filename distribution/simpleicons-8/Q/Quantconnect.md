# Quantconnect


```text
simpleicons-8/Q/Quantconnect
```

```text
include('simpleicons-8/Q/Quantconnect')
```



| Illustration | Quantconnect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Quantconnect.png) | ![illustration for Quantconnect](../../simpleicons-8/Q/Quantconnect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuantconnectXs>`
- `<$QuantconnectSm>`
- `<$QuantconnectMd>`
- `<$QuantconnectLg>`





## Quantconnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Quantconnect
include('simpleicons-8/Q/Quantconnect')

' renders the element
Quantconnect('Quantconnect', 'Quantconnect', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Quantconnect
include('simpleicons-8/Q/Quantconnect')

' renders the element
Quantconnect('Quantconnect', 'Quantconnect', 'an optional tech label', 'an optional description')
@enduml
```

