# TransgenderAlt


```text
fontawesome/Solid/TransgenderAlt
```

```text
include('fontawesome/Solid/TransgenderAlt')
```



| Illustration | TransgenderAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TransgenderAlt.png) | ![illustration for TransgenderAlt](../../fontawesome/Solid/TransgenderAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TransgenderAltXs>`
- `<$TransgenderAltSm>`
- `<$TransgenderAltMd>`
- `<$TransgenderAltLg>`





## TransgenderAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TransgenderAlt
include('fontawesome/Solid/TransgenderAlt')

' renders the element
TransgenderAlt('TransgenderAlt', 'Transgender Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TransgenderAlt
include('fontawesome/Solid/TransgenderAlt')

' renders the element
TransgenderAlt('TransgenderAlt', 'Transgender Alt', 'an optional tech label', 'an optional description')
@enduml
```

