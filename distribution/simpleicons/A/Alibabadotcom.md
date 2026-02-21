# Alibabadotcom


```text
simpleicons/A/Alibabadotcom
```

```text
include('simpleicons/A/Alibabadotcom')
```



| Illustration | Alibabadotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Alibabadotcom.png) | ![illustration for Alibabadotcom](../../simpleicons/A/Alibabadotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlibabadotcomXs>`
- `<$AlibabadotcomSm>`
- `<$AlibabadotcomMd>`
- `<$AlibabadotcomLg>`





## Alibabadotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Alibabadotcom
include('simpleicons/A/Alibabadotcom')

' renders the element
Alibabadotcom('Alibabadotcom', 'Alibabadotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alibabadotcom
include('simpleicons/A/Alibabadotcom')

' renders the element
Alibabadotcom('Alibabadotcom', 'Alibabadotcom', 'an optional tech label', 'an optional description')
@enduml
```

