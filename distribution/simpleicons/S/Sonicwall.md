# Sonicwall


```text
simpleicons/S/Sonicwall
```

```text
include('simpleicons/S/Sonicwall')
```



| Illustration | Sonicwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sonicwall.png) | ![illustration for Sonicwall](../../simpleicons/S/Sonicwall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonicwallXs>`
- `<$SonicwallSm>`
- `<$SonicwallMd>`
- `<$SonicwallLg>`





## Sonicwall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sonicwall
include('simpleicons/S/Sonicwall')

' renders the element
Sonicwall('Sonicwall', 'Sonicwall', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonicwall
include('simpleicons/S/Sonicwall')

' renders the element
Sonicwall('Sonicwall', 'Sonicwall', 'an optional tech label', 'an optional description')
@enduml
```

