# FileMedical


```text
fontawesome/Solid/FileMedical
```

```text
include('fontawesome/Solid/FileMedical')
```



| Illustration | FileMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileMedical.png) | ![illustration for FileMedical](../../fontawesome/Solid/FileMedical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileMedicalXs>`
- `<$FileMedicalSm>`
- `<$FileMedicalMd>`
- `<$FileMedicalLg>`





## FileMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileMedical
include('fontawesome/Solid/FileMedical')

' renders the element
FileMedical('FileMedical', 'File Medical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileMedical
include('fontawesome/Solid/FileMedical')

' renders the element
FileMedical('FileMedical', 'File Medical', 'an optional tech label', 'an optional description')
@enduml
```

