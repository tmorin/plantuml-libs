# Apachenetbeanside


```text
simpleicons-5/A/Apachenetbeanside
```

```text
include('simpleicons-5/A/Apachenetbeanside')
```



| Illustration | Apachenetbeanside |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachenetbeanside.png) | ![illustration for Apachenetbeanside](../../simpleicons-5/A/Apachenetbeanside.Local.png) |




## Apachenetbeanside

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachenetbeanside
include('simpleicons-5/A/Apachenetbeanside')

' renders the element
Apachenetbeanside('Apachenetbeanside', 'Apachenetbeanside', 'an optional tech label')
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

' loads the Item which embeds the element Apachenetbeanside
include('simpleicons-5/A/Apachenetbeanside')

' renders the element
Apachenetbeanside('Apachenetbeanside', 'Apachenetbeanside', 'an optional tech label')
@enduml
```

