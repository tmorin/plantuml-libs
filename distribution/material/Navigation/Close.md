# Close


```text
material/Navigation/Close
```

```text
include('material/Navigation/Close')
```



| Illustration | Close |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/Close.png) | ![illustration for Close](../../material/Navigation/Close.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloseXs>`
- `<$CloseSm>`
- `<$CloseMd>`
- `<$CloseLg>`





## Close

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Close
include('material/Navigation/Close')

' renders the element
Close('Close', 'Close', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Close
include('material/Navigation/Close')

' renders the element
Close('Close', 'Close', 'an optional tech label', 'an optional description')
@enduml
```

