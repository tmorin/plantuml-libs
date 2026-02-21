# Stream


```text
material/Content/Stream
```

```text
include('material/Content/Stream')
```



| Illustration | Stream |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/Stream.png) | ![illustration for Stream](../../material/Content/Stream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StreamXs>`
- `<$StreamSm>`
- `<$StreamMd>`
- `<$StreamLg>`





## Stream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Stream
include('material/Content/Stream')

' renders the element
Stream('Stream', 'Stream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stream
include('material/Content/Stream')

' renders the element
Stream('Stream', 'Stream', 'an optional tech label', 'an optional description')
@enduml
```

