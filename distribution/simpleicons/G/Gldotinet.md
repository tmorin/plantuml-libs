# Gldotinet


```text
simpleicons/G/Gldotinet
```

```text
include('simpleicons/G/Gldotinet')
```



| Illustration | Gldotinet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gldotinet.png) | ![illustration for Gldotinet](../../simpleicons/G/Gldotinet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GldotinetXs>`
- `<$GldotinetSm>`
- `<$GldotinetMd>`
- `<$GldotinetLg>`





## Gldotinet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gldotinet
include('simpleicons/G/Gldotinet')

' renders the element
Gldotinet('Gldotinet', 'Gldotinet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gldotinet
include('simpleicons/G/Gldotinet')

' renders the element
Gldotinet('Gldotinet', 'Gldotinet', 'an optional tech label', 'an optional description')
@enduml
```

