# Attachment


```text
material/File/Attachment
```

```text
include('material/File/Attachment')
```



| Illustration | Attachment |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/Attachment.png) | ![illustration for Attachment](../../material/File/Attachment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AttachmentXs>`
- `<$AttachmentSm>`
- `<$AttachmentMd>`
- `<$AttachmentLg>`





## Attachment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Attachment
include('material/File/Attachment')

' renders the element
Attachment('Attachment', 'Attachment', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Attachment
include('material/File/Attachment')

' renders the element
Attachment('Attachment', 'Attachment', 'an optional tech label', 'an optional description')
@enduml
```

