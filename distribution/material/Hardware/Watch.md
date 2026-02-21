# Watch


```text
material/Hardware/Watch
```

```text
include('material/Hardware/Watch')
```



| Illustration | Watch |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Watch.png) | ![illustration for Watch](../../material/Hardware/Watch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WatchXs>`
- `<$WatchSm>`
- `<$WatchMd>`
- `<$WatchLg>`





## Watch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Watch
include('material/Hardware/Watch')

' renders the element
Watch('Watch', 'Watch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Watch
include('material/Hardware/Watch')

' renders the element
Watch('Watch', 'Watch', 'an optional tech label', 'an optional description')
@enduml
```

