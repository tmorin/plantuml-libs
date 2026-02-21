# Work


```text
material/Action/Work
```

```text
include('material/Action/Work')
```



| Illustration | Work |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Work.png) | ![illustration for Work](../../material/Action/Work.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WorkXs>`
- `<$WorkSm>`
- `<$WorkMd>`
- `<$WorkLg>`





## Work

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Work
include('material/Action/Work')

' renders the element
Work('Work', 'Work', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Work
include('material/Action/Work')

' renders the element
Work('Work', 'Work', 'an optional tech label', 'an optional description')
@enduml
```

