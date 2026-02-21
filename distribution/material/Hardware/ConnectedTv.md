# ConnectedTv


```text
material/Hardware/ConnectedTv
```

```text
include('material/Hardware/ConnectedTv')
```



| Illustration | ConnectedTv |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/ConnectedTv.png) | ![illustration for ConnectedTv](../../material/Hardware/ConnectedTv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConnectedTvXs>`
- `<$ConnectedTvSm>`
- `<$ConnectedTvMd>`
- `<$ConnectedTvLg>`





## ConnectedTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ConnectedTv
include('material/Hardware/ConnectedTv')

' renders the element
ConnectedTv('ConnectedTv', 'Connected Tv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ConnectedTv
include('material/Hardware/ConnectedTv')

' renders the element
ConnectedTv('ConnectedTv', 'Connected Tv', 'an optional tech label', 'an optional description')
@enduml
```

