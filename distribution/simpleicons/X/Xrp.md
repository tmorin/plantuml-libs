# Xrp


```text
simpleicons/X/Xrp
```

```text
include('simpleicons/X/Xrp')
```



| Illustration | Xrp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/X/Xrp.png) | ![illustration for Xrp](../../simpleicons/X/Xrp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XrpXs>`
- `<$XrpSm>`
- `<$XrpMd>`
- `<$XrpLg>`





## Xrp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Xrp
include('simpleicons/X/Xrp')

' renders the element
Xrp('Xrp', 'Xrp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xrp
include('simpleicons/X/Xrp')

' renders the element
Xrp('Xrp', 'Xrp', 'an optional tech label', 'an optional description')
@enduml
```

