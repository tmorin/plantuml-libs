# PhoneSquareAlt


```text
fontawesome/Solid/PhoneSquareAlt
```

```text
include('fontawesome/Solid/PhoneSquareAlt')
```



| Illustration | PhoneSquareAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhoneSquareAlt.png) | ![illustration for PhoneSquareAlt](../../fontawesome/Solid/PhoneSquareAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneSquareAltXs>`
- `<$PhoneSquareAltSm>`
- `<$PhoneSquareAltMd>`
- `<$PhoneSquareAltLg>`





## PhoneSquareAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneSquareAlt
include('fontawesome/Solid/PhoneSquareAlt')

' renders the element
PhoneSquareAlt('PhoneSquareAlt', 'Phone Square Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneSquareAlt
include('fontawesome/Solid/PhoneSquareAlt')

' renders the element
PhoneSquareAlt('PhoneSquareAlt', 'Phone Square Alt', 'an optional tech label', 'an optional description')
@enduml
```

