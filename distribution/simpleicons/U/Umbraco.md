# Umbraco


```text
simpleicons/U/Umbraco
```

```text
include('simpleicons/U/Umbraco')
```



| Illustration | Umbraco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Umbraco.png) | ![illustration for Umbraco](../../simpleicons/U/Umbraco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmbracoXs>`
- `<$UmbracoSm>`
- `<$UmbracoMd>`
- `<$UmbracoLg>`





## Umbraco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Umbraco
include('simpleicons/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Umbraco
include('simpleicons/U/Umbraco')

' renders the element
Umbraco('Umbraco', 'Umbraco', 'an optional tech label', 'an optional description')
@enduml
```

