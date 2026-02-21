# ListAlt


```text
material/Communication/ListAlt
```

```text
include('material/Communication/ListAlt')
```



| Illustration | ListAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ListAlt.png) | ![illustration for ListAlt](../../material/Communication/ListAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListAltXs>`
- `<$ListAltSm>`
- `<$ListAltMd>`
- `<$ListAltLg>`





## ListAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ListAlt
include('material/Communication/ListAlt')

' renders the element
ListAlt('ListAlt', 'List Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListAlt
include('material/Communication/ListAlt')

' renders the element
ListAlt('ListAlt', 'List Alt', 'an optional tech label', 'an optional description')
@enduml
```

