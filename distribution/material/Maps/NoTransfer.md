# NoTransfer


```text
material/Maps/NoTransfer
```

```text
include('material/Maps/NoTransfer')
```



| Illustration | NoTransfer |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/NoTransfer.png) | ![illustration for NoTransfer](../../material/Maps/NoTransfer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoTransferXs>`
- `<$NoTransferSm>`
- `<$NoTransferMd>`
- `<$NoTransferLg>`





## NoTransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoTransfer
include('material/Maps/NoTransfer')

' renders the element
NoTransfer('NoTransfer', 'No Transfer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoTransfer
include('material/Maps/NoTransfer')

' renders the element
NoTransfer('NoTransfer', 'No Transfer', 'an optional tech label', 'an optional description')
@enduml
```

