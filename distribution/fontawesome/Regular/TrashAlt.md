# TrashAlt


```text
fontawesome/Regular/TrashAlt
```

```text
include('fontawesome/Regular/TrashAlt')
```



| Illustration | TrashAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/TrashAlt.png) | ![illustration for TrashAlt](../../fontawesome/Regular/TrashAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrashAltXs>`
- `<$TrashAltSm>`
- `<$TrashAltMd>`
- `<$TrashAltLg>`





## TrashAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TrashAlt
include('fontawesome/Regular/TrashAlt')

' renders the element
TrashAlt('TrashAlt', 'Trash Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrashAlt
include('fontawesome/Regular/TrashAlt')

' renders the element
TrashAlt('TrashAlt', 'Trash Alt', 'an optional tech label', 'an optional description')
@enduml
```

