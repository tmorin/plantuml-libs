# PublicOff


```text
material-4/Social/PublicOff
```

```text
include('material-4/Social/PublicOff')
```



| Illustration | PublicOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PublicOff.png) | ![illustration for PublicOff](../../material-4/Social/PublicOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PublicOffXs>`
- `<$PublicOffSm>`
- `<$PublicOffMd>`
- `<$PublicOffLg>`





## PublicOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PublicOff
include('material-4/Social/PublicOff')

' renders the element
PublicOff('PublicOff', 'Public Off', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PublicOff
include('material-4/Social/PublicOff')

' renders the element
PublicOff('PublicOff', 'Public Off', 'an optional tech label', 'an optional description')
@enduml
```

