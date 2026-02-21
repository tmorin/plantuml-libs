# Gsmarenadotcom


```text
simpleicons/G/Gsmarenadotcom
```

```text
include('simpleicons/G/Gsmarenadotcom')
```



| Illustration | Gsmarenadotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gsmarenadotcom.png) | ![illustration for Gsmarenadotcom](../../simpleicons/G/Gsmarenadotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GsmarenadotcomXs>`
- `<$GsmarenadotcomSm>`
- `<$GsmarenadotcomMd>`
- `<$GsmarenadotcomLg>`





## Gsmarenadotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gsmarenadotcom
include('simpleicons/G/Gsmarenadotcom')

' renders the element
Gsmarenadotcom('Gsmarenadotcom', 'Gsmarenadotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gsmarenadotcom
include('simpleicons/G/Gsmarenadotcom')

' renders the element
Gsmarenadotcom('Gsmarenadotcom', 'Gsmarenadotcom', 'an optional tech label', 'an optional description')
@enduml
```

