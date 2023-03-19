# FileCode


```text
fontawesome-6/Solid/FileCode
```

```text
include('fontawesome-6/Solid/FileCode')
```



| Illustration | FileCode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileCode.png) | ![illustration for FileCode](../../fontawesome-6/Solid/FileCode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCodeXs>`
- `<$FileCodeSm>`
- `<$FileCodeMd>`
- `<$FileCodeLg>`





## FileCode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileCode
include('fontawesome-6/Solid/FileCode')

' renders the element
FileCode('FileCode', 'File Code', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCode
include('fontawesome-6/Solid/FileCode')

' renders the element
FileCode('FileCode', 'File Code', 'an optional tech label', 'an optional description')
@enduml
```

