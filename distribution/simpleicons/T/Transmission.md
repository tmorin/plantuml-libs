# Transmission


```text
simpleicons/T/Transmission
```

```text
include('simpleicons/T/Transmission')
```



| Illustration | Transmission |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Transmission.png) | ![illustration for Transmission](../../simpleicons/T/Transmission.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransmissionXs>`
- `<$TransmissionSm>`
- `<$TransmissionMd>`
- `<$TransmissionLg>`





## Transmission

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Transmission
include('simpleicons/T/Transmission')

' renders the element
Transmission('Transmission', 'Transmission', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Transmission
include('simpleicons/T/Transmission')

' renders the element
Transmission('Transmission', 'Transmission', 'an optional tech label', 'an optional description')
@enduml
```

