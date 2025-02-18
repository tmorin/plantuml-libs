# Craftcms


```text
simpleicons-14/C/Craftcms
```

```text
include('simpleicons-14/C/Craftcms')
```



| Illustration | Craftcms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Craftcms.png) | ![illustration for Craftcms](../../simpleicons-14/C/Craftcms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CraftcmsXs>`
- `<$CraftcmsSm>`
- `<$CraftcmsMd>`
- `<$CraftcmsLg>`





## Craftcms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Craftcms
include('simpleicons-14/C/Craftcms')

' renders the element
Craftcms('Craftcms', 'Craftcms', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Craftcms
include('simpleicons-14/C/Craftcms')

' renders the element
Craftcms('Craftcms', 'Craftcms', 'an optional tech label', 'an optional description')
@enduml
```

