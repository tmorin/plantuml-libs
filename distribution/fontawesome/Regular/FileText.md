# FileText


```text
fontawesome/Regular/FileText
```

```text
include('fontawesome/Regular/FileText')
```



| Illustration | FileText |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FileText.png) | ![illustration for FileText](../../fontawesome/Regular/FileText.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileTextXs>`
- `<$FileTextSm>`
- `<$FileTextMd>`
- `<$FileTextLg>`





## FileText

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileText
include('fontawesome/Regular/FileText')

' renders the element
FileText('FileText', 'File Text', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileText
include('fontawesome/Regular/FileText')

' renders the element
FileText('FileText', 'File Text', 'an optional tech label', 'an optional description')
@enduml
```

