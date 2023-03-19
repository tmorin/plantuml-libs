# AppEngine


```text
gcp/Item/AppEngine
```

```text
include('gcp/Item/AppEngine')
```



| Illustration | AppEngine | AppEngineCard | AppEngineGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/AppEngine.png) | ![illustration for AppEngine](../../gcp/Item/AppEngine.Local.png) | ![illustration for AppEngineCard](../../gcp/Item/AppEngineCard.Local.png) | ![illustration for AppEngineGroup](../../gcp/Item/AppEngineGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppEngineXs>`
- `<$AppEngineSm>`
- `<$AppEngineMd>`
- `<$AppEngineLg>`





## AppEngine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngine
include('gcp/Item/AppEngine')

' renders the element
AppEngine('AppEngine', 'App Engine', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngine
include('gcp/Item/AppEngine')

' renders the element
AppEngine('AppEngine', 'App Engine', 'an optional tech label', 'an optional description')
@enduml
```

## AppEngineCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngineCard
include('gcp/Item/AppEngine')

' renders the element
AppEngineCard('AppEngineCard', 'App Engine Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngineCard
include('gcp/Item/AppEngine')

' renders the element
AppEngineCard('AppEngineCard', 'App Engine Card', 'an optional description')
@enduml
```

## AppEngineGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngineGroup
include('gcp/Item/AppEngine')

' renders the element
AppEngineGroup('AppEngineGroup', 'App Engine Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
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
include('gcp/bootstrap')

' loads the Item which embeds the element AppEngineGroup
include('gcp/Item/AppEngine')

' renders the element
AppEngineGroup('AppEngineGroup', 'App Engine Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

