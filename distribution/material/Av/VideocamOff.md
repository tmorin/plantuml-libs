# VideocamOff


```text
material/Av/VideocamOff
```

```text
include('material/Av/VideocamOff')
```



| Illustration | VideocamOff |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/VideocamOff.png) | ![illustration for VideocamOff](../../material/Av/VideocamOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VideocamOffXs>`
- `<$VideocamOffSm>`
- `<$VideocamOffMd>`
- `<$VideocamOffLg>`





## VideocamOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VideocamOff
include('material/Av/VideocamOff')

' renders the element
VideocamOff('VideocamOff', 'Videocam Off', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element VideocamOff
include('material/Av/VideocamOff')

' renders the element
VideocamOff('VideocamOff', 'Videocam Off', 'an optional tech label', 'an optional description')
@enduml
```

