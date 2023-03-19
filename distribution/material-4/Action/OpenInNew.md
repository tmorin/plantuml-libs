# OpenInNew


```text
material-4/Action/OpenInNew
```

```text
include('material-4/Action/OpenInNew')
```



| Illustration | OpenInNew |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OpenInNew.png) | ![illustration for OpenInNew](../../material-4/Action/OpenInNew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenInNewXs>`
- `<$OpenInNewSm>`
- `<$OpenInNewMd>`
- `<$OpenInNewLg>`





## OpenInNew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OpenInNew
include('material-4/Action/OpenInNew')

' renders the element
OpenInNew('OpenInNew', 'Open In New', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element OpenInNew
include('material-4/Action/OpenInNew')

' renders the element
OpenInNew('OpenInNew', 'Open In New', 'an optional tech label', 'an optional description')
@enduml
```

