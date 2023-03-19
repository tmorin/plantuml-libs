# Wetransfer


```text
simpleicons-8/W/Wetransfer
```

```text
include('simpleicons-8/W/Wetransfer')
```



| Illustration | Wetransfer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wetransfer.png) | ![illustration for Wetransfer](../../simpleicons-8/W/Wetransfer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WetransferXs>`
- `<$WetransferSm>`
- `<$WetransferMd>`
- `<$WetransferLg>`





## Wetransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wetransfer
include('simpleicons-8/W/Wetransfer')

' renders the element
Wetransfer('Wetransfer', 'Wetransfer', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wetransfer
include('simpleicons-8/W/Wetransfer')

' renders the element
Wetransfer('Wetransfer', 'Wetransfer', 'an optional tech label', 'an optional description')
@enduml
```

