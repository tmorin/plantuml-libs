# Quantcast


```text
simpleicons-14/Q/Quantcast
```

```text
include('simpleicons-14/Q/Quantcast')
```



| Illustration | Quantcast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quantcast.png) | ![illustration for Quantcast](../../simpleicons-14/Q/Quantcast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuantcastXs>`
- `<$QuantcastSm>`
- `<$QuantcastMd>`
- `<$QuantcastLg>`





## Quantcast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quantcast
include('simpleicons-14/Q/Quantcast')

' renders the element
Quantcast('Quantcast', 'Quantcast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quantcast
include('simpleicons-14/Q/Quantcast')

' renders the element
Quantcast('Quantcast', 'Quantcast', 'an optional tech label', 'an optional description')
@enduml
```

