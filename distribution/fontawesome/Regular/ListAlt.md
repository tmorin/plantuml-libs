# ListAlt


```text
fontawesome/Regular/ListAlt
```

```text
include('fontawesome/Regular/ListAlt')
```



| Illustration | ListAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ListAlt.png) | ![illustration for ListAlt](../../fontawesome/Regular/ListAlt.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListAlt
include('fontawesome/Regular/ListAlt')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ListAlt
include('fontawesome/Regular/ListAlt')

' renders the element
ListAlt('ListAlt', 'List Alt', 'an optional tech label', 'an optional description')
@enduml
```

