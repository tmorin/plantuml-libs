# SendAndArchive


```text
material/Action/SendAndArchive
```

```text
include('material/Action/SendAndArchive')
```



| Illustration | SendAndArchive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SendAndArchive.png) | ![illustration for SendAndArchive](../../material/Action/SendAndArchive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SendAndArchiveXs>`
- `<$SendAndArchiveSm>`
- `<$SendAndArchiveMd>`
- `<$SendAndArchiveLg>`





## SendAndArchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SendAndArchive
include('material/Action/SendAndArchive')

' renders the element
SendAndArchive('SendAndArchive', 'Send And Archive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SendAndArchive
include('material/Action/SendAndArchive')

' renders the element
SendAndArchive('SendAndArchive', 'Send And Archive', 'an optional tech label', 'an optional description')
@enduml
```

