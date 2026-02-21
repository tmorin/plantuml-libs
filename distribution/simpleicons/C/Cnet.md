# Cnet


```text
simpleicons/C/Cnet
```

```text
include('simpleicons/C/Cnet')
```



| Illustration | Cnet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cnet.png) | ![illustration for Cnet](../../simpleicons/C/Cnet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CnetXs>`
- `<$CnetSm>`
- `<$CnetMd>`
- `<$CnetLg>`





## Cnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cnet
include('simpleicons/C/Cnet')

' renders the element
Cnet('Cnet', 'Cnet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cnet
include('simpleicons/C/Cnet')

' renders the element
Cnet('Cnet', 'Cnet', 'an optional tech label', 'an optional description')
@enduml
```

