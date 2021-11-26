# Uploaded


```text
simpleicons-5/U/Uploaded
```

```text
include('simpleicons-5/U/Uploaded')
```



| Illustration | Uploaded |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Uploaded.png) | ![illustration for Uploaded](../../simpleicons-5/U/Uploaded.Local.png) |




## Uploaded

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Uploaded
include('simpleicons-5/U/Uploaded')

' renders the element
Uploaded('Uploaded', 'Uploaded', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Uploaded
include('simpleicons-5/U/Uploaded')

' renders the element
Uploaded('Uploaded', 'Uploaded', 'an optional tech label')
@enduml
```

