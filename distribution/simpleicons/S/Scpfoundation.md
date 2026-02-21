# Scpfoundation


```text
simpleicons/S/Scpfoundation
```

```text
include('simpleicons/S/Scpfoundation')
```



| Illustration | Scpfoundation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Scpfoundation.png) | ![illustration for Scpfoundation](../../simpleicons/S/Scpfoundation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScpfoundationXs>`
- `<$ScpfoundationSm>`
- `<$ScpfoundationMd>`
- `<$ScpfoundationLg>`





## Scpfoundation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Scpfoundation
include('simpleicons/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scpfoundation
include('simpleicons/S/Scpfoundation')

' renders the element
Scpfoundation('Scpfoundation', 'Scpfoundation', 'an optional tech label', 'an optional description')
@enduml
```

