# Craftcms


```text
simpleicons/C/Craftcms
```

```text
include('simpleicons/C/Craftcms')
```



| Illustration | Craftcms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Craftcms.png) | ![illustration for Craftcms](../../simpleicons/C/Craftcms.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Craftcms
include('simpleicons/C/Craftcms')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Craftcms
include('simpleicons/C/Craftcms')

' renders the element
Craftcms('Craftcms', 'Craftcms', 'an optional tech label', 'an optional description')
@enduml
```

