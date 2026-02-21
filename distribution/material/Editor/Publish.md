# Publish


```text
material/Editor/Publish
```

```text
include('material/Editor/Publish')
```



| Illustration | Publish |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/Publish.png) | ![illustration for Publish](../../material/Editor/Publish.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PublishXs>`
- `<$PublishSm>`
- `<$PublishMd>`
- `<$PublishLg>`





## Publish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Publish
include('material/Editor/Publish')

' renders the element
Publish('Publish', 'Publish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Publish
include('material/Editor/Publish')

' renders the element
Publish('Publish', 'Publish', 'an optional tech label', 'an optional description')
@enduml
```

