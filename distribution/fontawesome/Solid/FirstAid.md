# FirstAid


```text
fontawesome/Solid/FirstAid
```

```text
include('fontawesome/Solid/FirstAid')
```



| Illustration | FirstAid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FirstAid.png) | ![illustration for FirstAid](../../fontawesome/Solid/FirstAid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FirstAidXs>`
- `<$FirstAidSm>`
- `<$FirstAidMd>`
- `<$FirstAidLg>`





## FirstAid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FirstAid
include('fontawesome/Solid/FirstAid')

' renders the element
FirstAid('FirstAid', 'First Aid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FirstAid
include('fontawesome/Solid/FirstAid')

' renders the element
FirstAid('FirstAid', 'First Aid', 'an optional tech label', 'an optional description')
@enduml
```

