# Transportforlondon


```text
simpleicons/T/Transportforlondon
```

```text
include('simpleicons/T/Transportforlondon')
```



| Illustration | Transportforlondon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Transportforlondon.png) | ![illustration for Transportforlondon](../../simpleicons/T/Transportforlondon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransportforlondonXs>`
- `<$TransportforlondonSm>`
- `<$TransportforlondonMd>`
- `<$TransportforlondonLg>`





## Transportforlondon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Transportforlondon
include('simpleicons/T/Transportforlondon')

' renders the element
Transportforlondon('Transportforlondon', 'Transportforlondon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Transportforlondon
include('simpleicons/T/Transportforlondon')

' renders the element
Transportforlondon('Transportforlondon', 'Transportforlondon', 'an optional tech label', 'an optional description')
@enduml
```

