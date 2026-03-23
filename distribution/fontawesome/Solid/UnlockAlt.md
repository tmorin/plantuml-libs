# UnlockAlt


```text
fontawesome/Solid/UnlockAlt
```

```text
include('fontawesome/Solid/UnlockAlt')
```



| Illustration | UnlockAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UnlockAlt.png) | ![illustration for UnlockAlt](../../fontawesome/Solid/UnlockAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnlockAltXs>`
- `<$UnlockAltSm>`
- `<$UnlockAltMd>`
- `<$UnlockAltLg>`





## UnlockAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UnlockAlt
include('fontawesome/Solid/UnlockAlt')

' renders the element
UnlockAlt('UnlockAlt', 'Unlock Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UnlockAlt
include('fontawesome/Solid/UnlockAlt')

' renders the element
UnlockAlt('UnlockAlt', 'Unlock Alt', 'an optional tech label', 'an optional description')
@enduml
```

