# Zdf


```text
simpleicons/Z/Zdf
```

```text
include('simpleicons/Z/Zdf')
```



| Illustration | Zdf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zdf.png) | ![illustration for Zdf](../../simpleicons/Z/Zdf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZdfXs>`
- `<$ZdfSm>`
- `<$ZdfMd>`
- `<$ZdfLg>`





## Zdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zdf
include('simpleicons/Z/Zdf')

' renders the element
Zdf('Zdf', 'Zdf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zdf
include('simpleicons/Z/Zdf')

' renders the element
Zdf('Zdf', 'Zdf', 'an optional tech label', 'an optional description')
@enduml
```

