# PhoneAlt


```text
fontawesome/Solid/PhoneAlt
```

```text
include('fontawesome/Solid/PhoneAlt')
```



| Illustration | PhoneAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhoneAlt.png) | ![illustration for PhoneAlt](../../fontawesome/Solid/PhoneAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneAltXs>`
- `<$PhoneAltSm>`
- `<$PhoneAltMd>`
- `<$PhoneAltLg>`





## PhoneAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneAlt
include('fontawesome/Solid/PhoneAlt')

' renders the element
PhoneAlt('PhoneAlt', 'Phone Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneAlt
include('fontawesome/Solid/PhoneAlt')

' renders the element
PhoneAlt('PhoneAlt', 'Phone Alt', 'an optional tech label', 'an optional description')
@enduml
```

