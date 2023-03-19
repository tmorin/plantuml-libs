# FileShield


```text
fontawesome-6/Solid/FileShield
```

```text
include('fontawesome-6/Solid/FileShield')
```



| Illustration | FileShield |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileShield.png) | ![illustration for FileShield](../../fontawesome-6/Solid/FileShield.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileShieldXs>`
- `<$FileShieldSm>`
- `<$FileShieldMd>`
- `<$FileShieldLg>`





## FileShield

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileShield
include('fontawesome-6/Solid/FileShield')

' renders the element
FileShield('FileShield', 'File Shield', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileShield
include('fontawesome-6/Solid/FileShield')

' renders the element
FileShield('FileShield', 'File Shield', 'an optional tech label', 'an optional description')
@enduml
```

