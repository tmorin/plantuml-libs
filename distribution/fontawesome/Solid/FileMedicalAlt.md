# FileMedicalAlt


```text
fontawesome/Solid/FileMedicalAlt
```

```text
include('fontawesome/Solid/FileMedicalAlt')
```



| Illustration | FileMedicalAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileMedicalAlt.png) | ![illustration for FileMedicalAlt](../../fontawesome/Solid/FileMedicalAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileMedicalAltXs>`
- `<$FileMedicalAltSm>`
- `<$FileMedicalAltMd>`
- `<$FileMedicalAltLg>`





## FileMedicalAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileMedicalAlt
include('fontawesome/Solid/FileMedicalAlt')

' renders the element
FileMedicalAlt('FileMedicalAlt', 'File Medical Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileMedicalAlt
include('fontawesome/Solid/FileMedicalAlt')

' renders the element
FileMedicalAlt('FileMedicalAlt', 'File Medical Alt', 'an optional tech label', 'an optional description')
@enduml
```

