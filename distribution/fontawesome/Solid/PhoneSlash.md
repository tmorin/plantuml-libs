# PhoneSlash


```text
fontawesome/Solid/PhoneSlash
```

```text
include('fontawesome/Solid/PhoneSlash')
```



| Illustration | PhoneSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhoneSlash.png) | ![illustration for PhoneSlash](../../fontawesome/Solid/PhoneSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneSlashXs>`
- `<$PhoneSlashSm>`
- `<$PhoneSlashMd>`
- `<$PhoneSlashLg>`





## PhoneSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneSlash
include('fontawesome/Solid/PhoneSlash')

' renders the element
PhoneSlash('PhoneSlash', 'Phone Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneSlash
include('fontawesome/Solid/PhoneSlash')

' renders the element
PhoneSlash('PhoneSlash', 'Phone Slash', 'an optional tech label', 'an optional description')
@enduml
```

