# Portableappsdotcom


```text
simpleicons/P/Portableappsdotcom
```

```text
include('simpleicons/P/Portableappsdotcom')
```



| Illustration | Portableappsdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Portableappsdotcom.png) | ![illustration for Portableappsdotcom](../../simpleicons/P/Portableappsdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PortableappsdotcomXs>`
- `<$PortableappsdotcomSm>`
- `<$PortableappsdotcomMd>`
- `<$PortableappsdotcomLg>`





## Portableappsdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Portableappsdotcom
include('simpleicons/P/Portableappsdotcom')

' renders the element
Portableappsdotcom('Portableappsdotcom', 'Portableappsdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Portableappsdotcom
include('simpleicons/P/Portableappsdotcom')

' renders the element
Portableappsdotcom('Portableappsdotcom', 'Portableappsdotcom', 'an optional tech label', 'an optional description')
@enduml
```

