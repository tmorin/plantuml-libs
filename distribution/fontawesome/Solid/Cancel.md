# Cancel


```text
fontawesome/Solid/Cancel
```

```text
include('fontawesome/Solid/Cancel')
```



| Illustration | Cancel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cancel.png) | ![illustration for Cancel](../../fontawesome/Solid/Cancel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CancelXs>`
- `<$CancelSm>`
- `<$CancelMd>`
- `<$CancelLg>`





## Cancel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cancel
include('fontawesome/Solid/Cancel')

' renders the element
Cancel('Cancel', 'Cancel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cancel
include('fontawesome/Solid/Cancel')

' renders the element
Cancel('Cancel', 'Cancel', 'an optional tech label', 'an optional description')
@enduml
```

