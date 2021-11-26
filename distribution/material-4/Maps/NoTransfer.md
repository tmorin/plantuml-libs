# NoTransfer


```text
material-4/Maps/NoTransfer
```

```text
include('material-4/Maps/NoTransfer')
```



| Illustration | NoTransfer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/NoTransfer.png) | ![illustration for NoTransfer](../../material-4/Maps/NoTransfer.Local.png) |




## NoTransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoTransfer
include('material-4/Maps/NoTransfer')

' renders the element
NoTransfer('NoTransfer', 'No Transfer', 'an optional tech label')
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

' loads the Item which embeds the element NoTransfer
include('material-4/Maps/NoTransfer')

' renders the element
NoTransfer('NoTransfer', 'No Transfer', 'an optional tech label')
@enduml
```

