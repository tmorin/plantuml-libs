# FileCircleCheck


```text
fontawesome/Solid/FileCircleCheck
```

```text
include('fontawesome/Solid/FileCircleCheck')
```



| Illustration | FileCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileCircleCheck.png) | ![illustration for FileCircleCheck](../../fontawesome/Solid/FileCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCircleCheckXs>`
- `<$FileCircleCheckSm>`
- `<$FileCircleCheckMd>`
- `<$FileCircleCheckLg>`





## FileCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileCircleCheck
include('fontawesome/Solid/FileCircleCheck')

' renders the element
FileCircleCheck('FileCircleCheck', 'File Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCircleCheck
include('fontawesome/Solid/FileCircleCheck')

' renders the element
FileCircleCheck('FileCircleCheck', 'File Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

