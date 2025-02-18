# Googledrive


```text
simpleicons-14/G/Googledrive
```

```text
include('simpleicons-14/G/Googledrive')
```



| Illustration | Googledrive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googledrive.png) | ![illustration for Googledrive](../../simpleicons-14/G/Googledrive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogledriveXs>`
- `<$GoogledriveSm>`
- `<$GoogledriveMd>`
- `<$GoogledriveLg>`





## Googledrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googledrive
include('simpleicons-14/G/Googledrive')

' renders the element
Googledrive('Googledrive', 'Googledrive', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googledrive
include('simpleicons-14/G/Googledrive')

' renders the element
Googledrive('Googledrive', 'Googledrive', 'an optional tech label', 'an optional description')
@enduml
```

