# AddLink


```text
material-4/Content/AddLink
```

```text
include('material-4/Content/AddLink')
```



| Illustration | AddLink |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/AddLink.png) | ![illustration for AddLink](../../material-4/Content/AddLink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddLinkXs>`
- `<$AddLinkSm>`
- `<$AddLinkMd>`
- `<$AddLinkLg>`





## AddLink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddLink
include('material-4/Content/AddLink')

' renders the element
AddLink('AddLink', 'Add Link', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddLink
include('material-4/Content/AddLink')

' renders the element
AddLink('AddLink', 'Add Link', 'an optional tech label', 'an optional description')
@enduml
```

