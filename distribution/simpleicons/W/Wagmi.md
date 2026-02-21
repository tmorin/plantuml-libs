# Wagmi


```text
simpleicons/W/Wagmi
```

```text
include('simpleicons/W/Wagmi')
```



| Illustration | Wagmi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wagmi.png) | ![illustration for Wagmi](../../simpleicons/W/Wagmi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WagmiXs>`
- `<$WagmiSm>`
- `<$WagmiMd>`
- `<$WagmiLg>`





## Wagmi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wagmi
include('simpleicons/W/Wagmi')

' renders the element
Wagmi('Wagmi', 'Wagmi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wagmi
include('simpleicons/W/Wagmi')

' renders the element
Wagmi('Wagmi', 'Wagmi', 'an optional tech label', 'an optional description')
@enduml
```

