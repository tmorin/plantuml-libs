# MobileAndroidAlt


```text
fontawesome/Solid/MobileAndroidAlt
```

```text
include('fontawesome/Solid/MobileAndroidAlt')
```



| Illustration | MobileAndroidAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileAndroidAlt.png) | ![illustration for MobileAndroidAlt](../../fontawesome/Solid/MobileAndroidAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileAndroidAltXs>`
- `<$MobileAndroidAltSm>`
- `<$MobileAndroidAltMd>`
- `<$MobileAndroidAltLg>`





## MobileAndroidAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileAndroidAlt
include('fontawesome/Solid/MobileAndroidAlt')

' renders the element
MobileAndroidAlt('MobileAndroidAlt', 'Mobile Android Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileAndroidAlt
include('fontawesome/Solid/MobileAndroidAlt')

' renders the element
MobileAndroidAlt('MobileAndroidAlt', 'Mobile Android Alt', 'an optional tech label', 'an optional description')
@enduml
```

