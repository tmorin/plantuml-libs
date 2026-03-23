# GrinAlt


```text
fontawesome/Regular/GrinAlt
```

```text
include('fontawesome/Regular/GrinAlt')
```



| Illustration | GrinAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/GrinAlt.png) | ![illustration for GrinAlt](../../fontawesome/Regular/GrinAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrinAltXs>`
- `<$GrinAltSm>`
- `<$GrinAltMd>`
- `<$GrinAltLg>`





## GrinAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GrinAlt
include('fontawesome/Regular/GrinAlt')

' renders the element
GrinAlt('GrinAlt', 'Grin Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GrinAlt
include('fontawesome/Regular/GrinAlt')

' renders the element
GrinAlt('GrinAlt', 'Grin Alt', 'an optional tech label', 'an optional description')
@enduml
```

