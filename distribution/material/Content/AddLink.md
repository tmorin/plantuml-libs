# AddLink


```text
material/Content/AddLink
```

```text
include('material/Content/AddLink')
```



| Illustration | AddLink |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/AddLink.png) | ![illustration for AddLink](../../material/Content/AddLink.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element AddLink
include('material/Content/AddLink')

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
include('material/bootstrap')

' loads the Item which embeds the element AddLink
include('material/Content/AddLink')

' renders the element
AddLink('AddLink', 'Add Link', 'an optional tech label', 'an optional description')
@enduml
```

