# Check


```text
fontawesome/Solid/Check
```

```text
include('fontawesome/Solid/Check')
```



| Illustration | Check |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Check.png) | ![illustration for Check](../../fontawesome/Solid/Check.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckXs>`
- `<$CheckSm>`
- `<$CheckMd>`
- `<$CheckLg>`





## Check

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Check
include('fontawesome/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Check
include('fontawesome/Solid/Check')

' renders the element
Check('Check', 'Check', 'an optional tech label', 'an optional description')
@enduml
```

