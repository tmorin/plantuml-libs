# Sonicwall


```text
simpleicons-14/S/Sonicwall
```

```text
include('simpleicons-14/S/Sonicwall')
```



| Illustration | Sonicwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sonicwall.png) | ![illustration for Sonicwall](../../simpleicons-14/S/Sonicwall.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonicwall
include('simpleicons-14/S/Sonicwall')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sonicwall
include('simpleicons-14/S/Sonicwall')

' renders the element
Sonicwall('Sonicwall', 'Sonicwall', 'an optional tech label', 'an optional description')
@enduml
```

