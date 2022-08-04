# Googledrive


```text
simpleicons-7/G/Googledrive
```

```text
include('simpleicons-7/G/Googledrive')
```



| Illustration | Googledrive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Googledrive.png) | ![illustration for Googledrive](../../simpleicons-7/G/Googledrive.Local.png) |




## Googledrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googledrive
include('simpleicons-7/G/Googledrive')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Googledrive
include('simpleicons-7/G/Googledrive')

' renders the element
Googledrive('Googledrive', 'Googledrive', 'an optional tech label', 'an optional description')
@enduml
```

