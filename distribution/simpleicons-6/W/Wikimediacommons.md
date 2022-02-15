# Wikimediacommons


```text
simpleicons-6/W/Wikimediacommons
```

```text
include('simpleicons-6/W/Wikimediacommons')
```



| Illustration | Wikimediacommons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/W/Wikimediacommons.png) | ![illustration for Wikimediacommons](../../simpleicons-6/W/Wikimediacommons.Local.png) |




## Wikimediacommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikimediacommons
include('simpleicons-6/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Wikimediacommons
include('simpleicons-6/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label')
@enduml
```

