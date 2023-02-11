# Wikimediacommons


```text
simpleicons-8/W/Wikimediacommons
```

```text
include('simpleicons-8/W/Wikimediacommons')
```



| Illustration | Wikimediacommons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Wikimediacommons.png) | ![illustration for Wikimediacommons](../../simpleicons-8/W/Wikimediacommons.Local.png) |




## Wikimediacommons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Wikimediacommons
include('simpleicons-8/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wikimediacommons
include('simpleicons-8/W/Wikimediacommons')

' renders the element
Wikimediacommons('Wikimediacommons', 'Wikimediacommons', 'an optional tech label', 'an optional description')
@enduml
```

