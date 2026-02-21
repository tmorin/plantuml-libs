# Forum


```text
material/Communication/Forum
```

```text
include('material/Communication/Forum')
```



| Illustration | Forum |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Forum.png) | ![illustration for Forum](../../material/Communication/Forum.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ForumXs>`
- `<$ForumSm>`
- `<$ForumMd>`
- `<$ForumLg>`





## Forum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Forum
include('material/Communication/Forum')

' renders the element
Forum('Forum', 'Forum', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Forum
include('material/Communication/Forum')

' renders the element
Forum('Forum', 'Forum', 'an optional tech label', 'an optional description')
@enduml
```

